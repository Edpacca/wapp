import * as _ from 'lodash';
import * as express from 'express';
import { batchUpdateGuests, createGuest as createGuest, getGuest as getGuest, getGuests as getGuests, getGuestsByFamily as getGuestsByFamily, putUpdateGuest as updateMealChoices } from './controllers/guestController';
import { addGuestToFamily, registerUser as registerUser } from './controllers/usersController';
import { authenticate, logout, loginUser, loginAdmin } from './controllers/loginController';
import { verifyAdminToken, verifyClientToken, verifyUserToken } from '../middleware/auth';
import { registerAdmin } from './controllers/adminController';
import { getArrivalsAdmin, updateArrival } from './controllers/arrivalController';

export function appRouter(app: express.Express): void {

    // AUTHENTICATION
    app.get("/authenticate", (request, result) => {
        return authenticate(request, result);
    });

    app.post("/login", verifyClientToken, (request, result) => {
        return loginUser(request, result);
    });

    app.post("/admin/login", verifyClientToken, (request, result) => {
        return loginAdmin(request, result);
    });

    app.post("/logout", verifyClientToken, (request, result) => {
        return logout(request, result);
    });

    // USER
    app.post("/guest", verifyUserToken, (request, result) => {
        return createGuest(request, result);
    })

    app.get("/guest", verifyUserToken, (request, result) => {
        return getGuest(request, result);
    })

    app.get("/guest/family", verifyUserToken, (request, result) => {
        return getGuestsByFamily(request, result);
    })

    app.put("/guest", verifyUserToken, (request, result) => {
        return updateMealChoices(request, result);
    })

    app.put("/guest/arrival", verifyUserToken, (request, result) => {
        return updateArrival(request, result);
    })

    // ADMIN
    app.get("/guest/all", verifyAdminToken, (request, result) => {
        return getGuests(request, result);
    })

    app.get("/guest/arrival", verifyAdminToken, (request, result) => {
        return getArrivalsAdmin(request, result);
    })

    app.put("/guest/all", verifyAdminToken, (request, result) => {
        return batchUpdateGuests(request, result);
    })

    app.post("/register/user", verifyAdminToken, (request, result) => {
        return registerUser(request, result);
    });

    app.post("/register/guest", verifyAdminToken, (request, result) => {
        return addGuestToFamily(request, result);
    });

    // app.post("/admin/register", (request, result) => {
    //     return result.status(200).send(RegisterAdmin());
    // });
}

