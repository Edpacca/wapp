import * as _ from 'lodash';
import * as express from 'express';
import { CreateGuest, GetGuest, GetGuests, GetGuestsByFamily, UpdateMealChoices } from './controllers/guestController';

export function appRouter(app: express.Express): void {

    app.post("/guest", (request, result) => {
        return CreateGuest(request, result);
    })

    app.get("/guest", (request, result) => {
        return GetGuest(request, result);
    })

    app.get("/guest/all", (request, result) => {
        return GetGuests(request, result);
    })

    app.get("/guest/family", (request, result) => {
        return GetGuestsByFamily(request, result);
    })

    app.put("/guest/dinner", (request, result) => {
        return UpdateMealChoices(request, result);
    })
}