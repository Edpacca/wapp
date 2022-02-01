import User from '../../models/userModelSchema';
import Guest from '../../models/guestModelSchema';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserResponse, GuestResponse } from '../../models/userResponseModel';
import { GetGuestObjectByFamily } from './guestController';

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

        const type = "user";
        const userResponse: UserResponse = {
            id: user._id,
            family: user.family,
            familyId: user.familyId,
            token: user.token,
            guests: guests
        }

        return result.status(200).json({type, userResponse});

    } catch (err) {
        return result.json(false);
    }
}

export async function AdminLoggedIn(request, result) {
    try {
        const token = request.cookies.token;
        if (!token) return result.json(false);

        jwt.verify(token, process.env.ADMIN_TOKEN_KEY);

        return result.json(true);

    } catch (err) {
        return result.json(false);
    }
}
