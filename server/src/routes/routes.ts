import * as _ from 'lodash';
import * as express from 'express';
import { verifyAdminToken, verifyClientToken, verifyUserToken } from '../middleware/auth';
import { updateGuests, createGuest, getGuest, getGuests, getGuestsByFamily, updateGuest } from './controllers/guestController';
import { addGuestToFamily, registerFamily as registerFamily } from './controllers/familyController';
import { authenticate, logout, login, loginAdmin } from './controllers/loginController';
import { getArrivals, updateArrival } from './controllers/arrivalController';

export function appRouter(app: express.Express): void {

    // AUTHENTICATION
    app.get("/authenticate", (request, result) => {
        return authenticate(request, result);
    });

    app.post("/login", verifyClientToken, (request, result) => {
        return login(request, result);
    });

    app.post("/login/admin", verifyClientToken, (request, result) => {
        return loginAdmin(request, result);
    });

    app.post("/logout", verifyClientToken, (request, result) => {
        return logout(request, result);
    });

    // USER
    app.put("/guest", verifyUserToken, (request, result) => {
        return updateGuest(request, result);
    });

    app.put("/guest/arrival", verifyUserToken, (request, result) => {
        return updateArrival(request, result);
    });

    // ADMIN
    app.post("/guest", verifyAdminToken, (request, result) => {
        return createGuest(request, result);
    });

    app.get("/guest", verifyAdminToken, (request, result) => {
        return getGuest(request, result);
    });

    app.get("/guest/all", verifyAdminToken, (request, result) => {
        return getGuests(request, result);
    });

    app.put("/guest/all", verifyAdminToken, (request, result) => {
        return updateGuests(request, result);
    });

    app.get("/guest/arrival", verifyAdminToken, (request, result) => {
        return getArrivals(request, result);
    });

    app.get("/guest/family", verifyAdminToken, (request, result) => {
        return getGuestsByFamily(request, result);
    });

    app.post("/register/family", verifyAdminToken, (request, result) => {
        return registerFamily(request, result);
    });

    app.post("/register/guest", verifyAdminToken, (request, result) => {
        return addGuestToFamily(request, result);
    });
}

