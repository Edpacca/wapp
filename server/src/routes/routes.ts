import * as _ from 'lodash';
import * as express from 'express';
import { batchUpdateGuests, createGuest as createGuest, getGuest as getGuest, getGuests as getGuests, getGuestsByFamily as getGuestsByFamily, putUpdateGuest as updateMealChoices } from './controllers/guestController';
import { addGuestToFamily, registerUser as registerUser } from './controllers/usersController';
import { authenticate, logout, loginUser, loginAdmin } from './controllers/loginController';
import { verifyAdminToken, verifyClientToken, verifyUserToken } from '../middleware/auth';
import { registerAdmin } from './controllers/adminController';
import { getArrivals, getArrivalsAdmin, updateArrival } from './controllers/arrivalController';

export function appRouter(app: express.Express): void {

    // AUTHENTICATION
    app.get("/authenticate", (request, result) => {
        console.log(request.body);
        return authenticate(request, result);
    });

    app.post("/login", verifyClientToken, (request, result) => {
        console.log(request.body);
        return loginUser(request, result);
    });

    app.post("/admin/login", verifyClientToken, (request, result) => {
        console.log(request.body);
        return loginAdmin(request, result);
    });

    app.post("/logout", verifyClientToken, (request, result) => {
        console.log(request.body);
        return logout(request, result);
    });

    // USER
    app.post("/guest", verifyUserToken, (request, result) => {
        console.log(request.body);
        return createGuest(request, result);
    })

    app.get("/guest", verifyUserToken, (request, result) => {
        console.log(request.body);
        return getGuest(request, result);
    })

    app.get("/guest/family", verifyUserToken, (request, result) => {
        console.log(request.body);
        return getGuestsByFamily(request, result);
    })

    app.put("/guest", verifyUserToken, (request, result) => {
        console.log(request.body);
        return updateMealChoices(request, result);
    })

    app.put("/guest/arrival", verifyUserToken, (request, result) => {
        console.log(request.body);
        return updateArrival(request, result);
    })

    // ADMIN
    app.get("/guest/all", verifyAdminToken, (request, result) => {
        console.log(request.body);
        return getGuests(request, result);
    })

    app.get("/guest/arrival", verifyAdminToken, (request, result) => {
        console.log(request.body);
        return getArrivalsAdmin(request, result);
    })

    app.put("/guest/all", verifyAdminToken, (request, result) => {
        console.log(request.body);
        return batchUpdateGuests(request, result);
    })

    app.post("/register/user", verifyAdminToken, (request, result) => {
        console.log(request.body);
        return registerUser(request, result);
    });

    app.post("/register/guest", verifyAdminToken, (request, result) => {
        console.log(request.body);
        return addGuestToFamily(request, result);
    });

    // app.post("/admin/register", verifyAdminToken, (request, result) => {
    //     return result.status(200).send(registerAdmin());
    // });

}

