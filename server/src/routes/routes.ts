import * as _ from 'lodash';
import * as express from 'express';
import { CreateGuest, GetGuest, GetGuests, GetGuestsByFamily, UpdateMealChoices } from './controllers/guestController';
import { RegisterUser, LoginUser } from './controllers/usersController';
import { verifyToken } from '../middleware/auth';

export function appRouter(app: express.Express): void {

    app.post("/guest", verifyToken, (request, result) => {
        return CreateGuest(request, result);
    })

    app.get("/guest", verifyToken, (request, result) => {
        return GetGuest(request, result);
    })

    app.get("/guest/all", verifyToken, (request, result) => {
        return GetGuests(request, result);
    })

    app.get("/guest/family", verifyToken, (request, result) => {
        return GetGuestsByFamily(request, result);
    })

    app.put("/guest/dinner", verifyToken, (request, result) => {
        return UpdateMealChoices(request, result);
    })

    app.post("/register", verifyToken, (request, result) => {
        return RegisterUser(request, result);
    });

    app.post("/login", (request, result) => {
        return LoginUser(request, result);
    });
}