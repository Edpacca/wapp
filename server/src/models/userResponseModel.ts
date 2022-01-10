export interface GuestResponse {
    id: string,
    family: string,
    familyId: string,
    name: string,
    starter: number | undefined,
    main: number | undefined,
    dessert: number | undefined,
    diet: string | undefined,
}

export interface UserResponse {
    id: string,
    family: string,
    familyId: string,
    token: string,
    guests: GuestResponse[],
}