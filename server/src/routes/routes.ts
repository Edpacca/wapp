import * as _ from 'lodash';
import * as express from 'express';
import { BatchUpdateGuests, CreateGuest as createGuest, GetGuest as getGuest, GetGuests as getGuests, GetGuestsByFamily as getGuestsByFamily, UpdateMealChoices as updateMealChoices } from './controllers/guestController';
import { AddGuestToFamily, RegisterUser as registerUser } from './controllers/usersController';
import { authenticate, logout, loginUser, loginAdmin } from './controllers/loginController';
import { verifyAdminToken, verifyClientToken, verifyUserToken } from '../middleware/auth';
import { RegisterAdmin } from './controllers/adminController';

export function appRouter(app: express.Express): void {

    // AUTHENTICATION
    app.get("/authenticate", (request, result) => {
        authenticate(request, result);
    });

    app.post("/login", verifyClientToken, (request, result) => {
        loginUser(request, result);
    });

    app.post("/admin/login", verifyClientToken, (request, result) => {
        loginAdmin(request, result);
    });

    app.post("/logout", verifyClientToken, (request, result) => {
        logout(request, result);
    });

    // USER
    app.post("/guest", verifyUserToken, (request, result) => {
        createGuest(request, result);
    })

    app.get("/guest", verifyUserToken, (request, result) => {
        getGuest(request, result);
    })

    app.get("/guest/family", verifyUserToken, (request, result) => {
        getGuestsByFamily(request, result);
    })

    app.put("/guest/dinner", verifyUserToken, (request, result) => {
        updateMealChoices(request, result);
    })

    // ADMIN
    app.get("/guest/all", verifyAdminToken, (request, result) => {
        getGuests(request, result);
    })

    app.put("/guest/all", verifyAdminToken, (request, result) => {
        BatchUpdateGuests(request, result);
    })

    app.post("/register/user", verifyAdminToken, (request, result) => {
        registerUser(request, result);
    });

    app.post("/register/guest", verifyAdminToken, (request, result) => {
        AddGuestToFamily(request, result);
    });

    // app.post("/admin/register", (request, result) => {
    //     return result.status(200).send(RegisterAdmin());
    // });

}

