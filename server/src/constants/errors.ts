import { WappError } from '../models/responses/WappError';

export const InvalidCredentialsError: WappError = {
    type: "auth",
    message: "Invalid Credentials" 
}

export const ServerError: WappError = {
    type: "server",
    message: "errkk" 
}

export const DbError: WappError = {
    type: "db",
    message: "Was unable to write to database :("
}
