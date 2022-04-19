import User from '../../models/schema/userModelSchema';
import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs';
import Admin from '../../models/schema/adminModelSchema';
import { UserResponse } from '../../models/responses/userResponse';
import { getGuestObjectByFamily } from './guestController';
import { InvalidCredentialsError, ServerError } from '../../constants/errors';
import { getSeats } from './seatsController';
import { LoginResponseSuccess, LoginResponseFailure } from '../../models/responses/loginResponse';
import { getArrivalResponse } from './arrivalController';
import { getRooms } from './roomController';

export async function authenticate(request, result) {
    try {
        const token = request.cookies.token;
        if (!token) return result.status(401).json(false);

        let type = "";
        let name = "";
        
        jwt.verify(token, process.env.TOKEN_KEY, function(err, decoded) {
            type = decoded.type ?? "";
            name = decoded.name ?? "";
        });

        switch (type) {
            case "user": {
                const user = await User.findOne({family: name});
                const guests = await getGuestObjectByFamily(name);
                const seats = await getSeats();
                const guestsWithRooms = guests.filter(guest => guest.room != null).length;
                const rooms = guestsWithRooms > 0 ? await getRooms() : [];
                const arrivals = await getArrivalResponse();
                const userResponse: UserResponse = {
                    id: user._id,
                    family: {name: name, id: user.familyId},
                    guests: guests,
                    seats: seats,
                    rooms: rooms,
                    arrivals: arrivals
                }
                return result.status(200).json({type: "user", data: userResponse});
            }
            case "admin" :
                return result.status(200).json({type: "admin"});
            default:
                return result.status(401);
            }

    } catch (err) {
        console.log(err);
        return result.status(401);
    }
}

export async function login(request, result) {

    try {
        const { family, password } = request.body;
        
        if (!(family && password)) {
            return result.status(400).json({errors: [InvalidCredentialsError]});
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
            const loginResponse: LoginResponseSuccess = {result: "SUCCESS", name: user.family, id: user._id}
            return result.status(200).json(loginResponse);
        }

        const loginResponse: LoginResponseFailure = {result: "FAILURE", errors: [InvalidCredentialsError] }
        return result.status(401).json(loginResponse);

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
        if (errorMessage) result.status(400).json({result: "FAILURE", errors: [errorMessage] });

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
            const loginResponse: LoginResponseSuccess = {result: "SUCCESS", name: admin.name, id: admin._id}
            return result.status(200).json(loginResponse);
        }

        const loginResponse: LoginResponseFailure = {result: "FAILURE", errors: [InvalidCredentialsError] }
        return result.status(401).json(loginResponse);

    } catch (error) {
        console.log(error)
        return result.status(500).json({errors: [ServerError]});
    }
}

export async function logout(request, result) {
    result.cookie('token',  "", { httpOnly: true, expires: new Date(0) });
    return result.status(200).json("logged out");
}
