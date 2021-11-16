import * as _ from 'lodash';
import * as express from 'express';
import { CreateUser } from './controllers/userController';

export function appRouter(app: express.Express): void {

    // GET dinner
    app.get("/dinner", (request, result) => {
        result.status(200);
        result.json("pork chops yo");
    });

    app.post("/user", (request, result) => {
        return CreateUser(request, result);
    })
}