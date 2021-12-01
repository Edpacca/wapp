import User from '../../models/userModel';
import Guest from '../../models/guestModel';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { ObfuscatedUserModel } from '../../models/ObfuscatedUserModel';

export async function RegisterUser(request, result) {
    try {
        const { family, password, members } = request.body; 

        if (!(family && password && members)) {
            return result.status(400).send("All input is required");
        }

        const existingUser = await User.findOne({family});

        if (existingUser) {
            return result.status(409).send("User already exists");
        }

        const encryptedPassword = await bcrypt.hash(password, 10);
        const familyId = uuid();

        const user = await User.create(
            {
                family,
                familyId,
                password: encryptedPassword,
                members
            }
        );

        const token = jwt.sign(
            { user_id: user._id, family },
            process.env.TOKEN_KEY,
            {
                expiresIn: "2h",
            }
        );

        user.token = token;

        user.members.forEach(member => {
            const guest = Guest.create(
            {
                family: user.family,
                familyId: user.familyId,
                name: member
            });
        });
        
        const obfsUser: ObfuscatedUserModel = {
            id: user._id,
            family: user.family,
            familyId: user.familyId,
            token: user.token,
            members: user.members
        }
        result.status(201).json(obfsUser);

    } catch(error) {
        console.log(error)
    }
}

export async function LoginUser(request, result) {
    try {
        const { family, password } = request.body;

        if (!(family && password)) {
            result.status(400).send("All input required");
        }

        const user = await User.findOne({family});

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { user_id: user._id, family },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;

            const obfsUser: ObfuscatedUserModel = {
                id: user._id,
                family: user.family,
                familyId: user.familyId,
                token: user.token,
                members: user.members
            }

            result.cookie('token', token);
            return result.status(200).json(obfsUser);
        }

        return result.status(400).send("Invalid Credentials");

    } catch (error) {
        console.log(error)
    }
}

export async function LoggedIn(request, result) {
    try {
        const token = request.cookies.token;
        if (!token) return result.json(false);

        jwt.verify(token, process.env.TOKEN_KEY);

        return result.json(true);

    } catch (err) {
        return result.json(false);
    }
}