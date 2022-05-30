export interface CreateFamily {
    family: string,
    password: string,
    guests: [string, string][]
}

export interface AddGuestRequest {
    family: string,
    name: string,
    surname: string,
}
