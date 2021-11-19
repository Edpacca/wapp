import * as _ from 'lodash';
import * as express from 'express';
import { CreateUser, GetUser, GetUsers, GetUsersByFamily, UpdateMealChoices } from './controllers/userController';

export function appRouter(app: express.Express): void {

    // GET dinner
    app.get("/dinner", (request, result) => {
        result.status(200).send("pork chops yo");
    });

    app.put("/dinner", (request, result) => {
        return UpdateMealChoices(request, result);
    })

    app.post("/user", (request, result) => {
        return CreateUser(request, result);
    })

    app.get("/user", (request, result) => {
        return GetUser(request, result);
    })

    app.get("/user/all", (request, result) => {
        return GetUsers(request, result);
    })

    app.get("/user/family", (request, result) => {
        return GetUsersByFamily(request, result);
    })
}