import Seat from '../../models/seatModelSchema';

export function GetSeats(request, result) {
    Seat.find({}, (err, seats) => {
        return result.status(200).json(seats);
    });
}
