import User from '../../models/schema/userModelSchema';
import Guest from '../../models/schema/guestModelSchema';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import { UserResponse, GuestResponse } from '../../models/responses/userResponse';

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
            { type: "user", user_id: user._id, family },
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
                seat: newGuest.seat,
            });
        }
        
        const userResponse: UserResponse = {
            id: user._id,
            family: user.family,
            familyId: user.familyId,
            guests: guestsResponse
        }
        result.status(201).json(userResponse);

    } catch(error) {
        console.log(error)
        return result.status(500);
    }
}

export async function AddGuestToFamily(request, result) {
    try {

        const { family, name} = request.body;

        if (!(family && name)) {
            return result.status(400).send("All input is required");
        }

        const existingUser = await User.findOne({family});

        const guest = await Guest.create(
            {
                family: family,
                familyId: existingUser._id,
                name: name
            }
        );
        
        const guestsResponse: GuestResponse = {
                id: guest.id,
                family: guest.family,
                familyId: guest.familyId,
                name: guest.name,
                starter: guest.starter,
                main: guest.main,
                dessert: guest.dessert,
                diet: guest.diet,
                seat: guest.seat
        }

        result.status(201).json(guestsResponse);

    } catch(error) {
        console.log(error)
        return result.status(500);
    }
}


