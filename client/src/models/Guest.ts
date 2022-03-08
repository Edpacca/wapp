export interface Guest {
    id: string,
    family: string,
    familyId: string,
    name: string,
    starter: number | undefined,
    main: number | undefined,
    dessert: number | undefined,
    diet: string | undefined,
    seat: number | undefined,
    room: string | undefined
}

export interface GuestRequest {
    family: string,
}
