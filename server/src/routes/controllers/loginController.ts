import User from '../../models/userModelSchema';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import { UserResponse } from '../../models/userResponseModel';
import { GetGuestObjectByFamily } from './guestController';
import Admin from '../../models/adminModelSchema';
import { AdminResponse } from '../../models/AdminResponse';
import { InvalidCredentialsError, ServerError } from '../../constants/errors';
import { GetSeats } from './seatsController';

export async function authenticate(request, result) {
    try {
        const token = request.cookies.token;
        if (!token) return result.status(401).json(false);

        let type;
        let name;
        
        jwt.verify(token, process.env.TOKEN_KEY, function(err, decoded) {
            type = decoded.type ?? "";
            name = decoded.name ?? "";
        });

            switch (type) {
                case "user": {
                    const user = await User.findOne({name});
                    const guests = await GetGuestObjectByFamily(name);
                    const seats = await GetSeats();
                    const userResponse: UserResponse = {
                        id: user._id,
                        family: name,
                        familyId: user.familyId,
                        guests: guests,
                        seats: seats
                    }
                    return result.status(200).json({type: "user", data: userResponse});
                }
                case "admin" :
                    return result.status(200).json({type: "admin"});
                default:
                    return result.status(401).json(false);
            }

    } catch (err) {
        console.log(err);
        return result.status(401);
    }
}

export async function loginUser(request, result) {
    try {
        const { family, password } = request.body;
        
        if (!(family && password)) {
            result.status(400).json({errors: [InvalidCredentialsError]});
        }

        const user = await User.findOne({family});

        if (user && (await bcrypt.compare(password, user.password))) {
            const token = jwt.sign(
                { type: "user", user_id: user._id, name: family },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );

            user.token = token;
            result.cookie('token', token);
            return result.status(200).json({result: "SUCCESS", family: user.family, id: user._id});
        }

        return result.status(401).json({errors: [InvalidCredentialsError]});

    } catch (error) {
        console.log(error)
        return result.status(500).json(({errors: [ServerError]}));
    }
}

export async function loginAdmin(request, result) {
    try {
        const { name, password } = request.body;

        let errorMessage;
        if (!name) errorMessage = "Please enter a user name";
        if (!password) errorMessage = "Please enter your password";
        if (errorMessage) result.status(400).json({error: errorMessage});

        const admin = await Admin.findOne({name});

        if (admin && (await bcrypt.compare(password, admin.password))) {
            const token = jwt.sign(
                { type: "admin", admin_id: admin._id, name: admin.name },
                process.env.TOKEN_KEY,
                {
                    expiresIn: "2h",
                }
            );
            
            result.cookie('token', token);
            return result.status(200).send({result: "SUCCESS", name: admin.name, id: admin._id});
        }

        return result.status(401).send({errors: [InvalidCredentialsError]});

    } catch (error) {
        console.log(error)
        return result.status(500).json({errors: [ServerError]});
    }
}

export async function logout(request, result) {
    result.cookie('token',  "", { httpOnly: true, expires: new Date(0) });
    return result.status(200).json("logged out");
}
