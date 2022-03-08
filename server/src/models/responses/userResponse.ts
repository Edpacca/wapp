import { ArrivalResponse } from "./ArrivalResponse"
import { FamilyResponse } from "./familyResponse"
import { GuestResponse } from "./guestResponse"
import { RoomResponse } from "./roomResponse"
import { SeatResponse } from "./seatResponse"

export interface UserResponse {
    id: string,
    family: FamilyResponse,
    guests: GuestResponse[],
    seats?: SeatResponse[],
    rooms?: RoomResponse[],
    arrivals?: ArrivalResponse[],
}
