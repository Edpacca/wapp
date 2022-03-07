import Seat from '../../models/schema/seatModelSchema';
import { SeatResponse } from '../../models/responses/seatResponse';

export async function getSeats() {

    const seats = await Seat.find({});
    if (!seats || seats.length === 0) {
        return [];
    }

    const seatResponse: SeatResponse[] = [];

    seats.forEach(seat => {
        seatResponse.push({
            id: seat._id,
            guestName: seat.guestName,
            seatNumber: seat.seatNumber
        });
    })

    return seatResponse;
}
