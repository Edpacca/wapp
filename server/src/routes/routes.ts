import * as _ from 'lodash';
import * as express from 'express';
import { CreateGuest, GetGuest, GetGuests, GetGuestsByFamily, UpdateMealChoices } from './controllers/guestController';
import { RegisterUser, LoginUser } from './controllers/usersController';
import { verifyAdminToken, verifyClientToken, verifyUserToken } from '../middleware/auth';
import { LoginAdmin, RegisterAdmin } from './controllers/adminController';

export function appRouter(app: express.Express): void {

    // USER
    app.post("/guest", verifyUserToken, (request, result) => {
        CreateGuest(request, result);
    })

    app.get("/guest", verifyUserToken, (request, result) => {
        GetGuest(request, result);
    })

    app.get("/guest/family", verifyUserToken, (request, result) => {
        GetGuestsByFamily(request, result);
    })

    app.put("/guest/dinner", verifyUserToken, (request, result) => {
        UpdateMealChoices(request, result);
    })

    // ADMIN
    app.get("/guest/all", verifyAdminToken, (request, result) => {
        GetGuests(request, result);
    })

    app.post("/register", verifyAdminToken, (request, result) => {
        RegisterUser(request, result);
    });

    // CLIENT
    app.post("/login", verifyClientToken, (request, result) => {
        LoginUser(request, result);
    });

    // app.post("/admin/register", (request, result) => {
    //     return result.status(200).send(RegisterAdmin());
    // });

    app.post("/admin/login", verifyClientToken, (request, result) => {
        (LoginAdmin(request, result));
    });
}