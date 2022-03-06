export interface GuestResponse {
    id: string,
    family: string,
    familyId: string,
    name: string,
    starter: number | undefined,
    main: number | undefined,
    dessert: number | undefined,
    diet: string | undefined,
    seat: string | undefined
}

export interface SeatResponse {
    id: string,
    guestName: string,
    seatNumber: number
}

export interface UserResponse {
    id: string,
    family: string,
    familyId: string,
    guests: GuestResponse[],
    seats?: SeatResponse[]
}
