import { WappError } from "./WappError"

export interface LoginResponseSuccess {
    result: 'SUCCESS',
    name: string,
    id: string
}

export interface LoginResponseFailure {
    result: 'FAILURE',
    errors: WappError[]
}