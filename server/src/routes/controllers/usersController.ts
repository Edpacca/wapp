import User from '../../models/userModelSchema';
import Guest from '../../models/guestModelSchema';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserResponse, GuestResponse } from '../../models/userResponseModel';
import { GetGuestObjectByFamily } from './guestController';

export async function RegisterUser(request, result) {
    try {
        const { family, password, guests } = request.body; 

        if (!(family && password && guests)) {
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
                password: encryptedPassword
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
        
        const guestsResponse: GuestResponse[] = [];

        for (let i = 0; i < guests.length; i++) {

            const newGuest = await Guest.create(
            {
                family: user.family,
                familyId: user.familyId,
                name: guests[i]
            });
            
            guestsResponse.push({
                id: newGuest.id,
                family: newGuest.family,
                familyId: newGuest.familyId,
                name: newGuest.name,
                starter: newGuest.starter,
                main: newGuest.main,
                dessert: newGuest.dessert,
                diet: newGuest.diet,
            });
        }
        
        const userResponse: UserResponse = {
            id: user._id,
            family: user.family,
            familyId: user.familyId,
            token: user.token,
            guests: guestsResponse
        }
        result.status(201).json(userResponse);

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

            const guests = await GetGuestObjectByFamily(family);

            const userResponse: UserResponse = {
                id: user._id,
                family: user.family,
                familyId: user.familyId,
                token: user.token,
                guests: guests
            }

            result.cookie('token', token);
            return result.status(200).json(userResponse);
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

        let family = "";

        jwt.verify(token, process.env.TOKEN_KEY, function(err, decoded) {
            family = decoded.family;
            console.log(family);
        });

        const user = await User.findOne({family});
        const guests = await GetGuestObjectByFamily(family);

        const userResponse: UserResponse = {
            id: user._id,
            family: user.family,
            familyId: user.familyId,
            token: user.token,
            guests: guests
        }

        return result.status(200).json(userResponse);

    } catch (err) {
        return result.json(false);
    }
}