export interface Guest {
    id: string,
    family: string,
    familyId: string,
    name: string,
    starter: number | undefined,
    main: number | undefined,
    dessert: number | undefined,
    diet: string | undefined,
}

export interface GuestRequest {
    family: string,
}