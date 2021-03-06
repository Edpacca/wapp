export interface GuestResponse {
    id: string,
    family: string,
    familyId: string,
    name: string,
    surname: string,
    starter: number | undefined,
    main: number | undefined,
    dessert: number | undefined,
    diet: string | undefined,
    seat: string | undefined,
    room: string | undefined,
}
