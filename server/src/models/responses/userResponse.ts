import { ArrivalResponse } from "./ArrivalResponse"
import { GuestResponse } from "./guestResponse"
import { SeatResponse } from "./seatResponse"

export interface UserResponse {
    id: string,
    family: string,
    familyId: string,
    guests: GuestResponse[],
    seats?: SeatResponse[],
    arrivals?: ArrivalResponse[],
}
