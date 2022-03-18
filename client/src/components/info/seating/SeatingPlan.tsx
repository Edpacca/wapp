import { Seat } from "../../../models/Seat";
import { SeatIcon } from "./SeatIcon";

export const SeatingPlan = (props: {guestSeats: Seat[], activeGuestSeatNumbers: number[]}) => {

    const leftSeats: Seat[] = [];
    const rightSeats: Seat[] = [];

    for (let i = 0; i < 50; i++) {
        if (i < 28) leftSeats.push({seatNumber: i});
        else rightSeats.push({seatNumber: i})
    }

    props.guestSeats.forEach(seat => {
        let seatBuffer = seat;

        if (props.activeGuestSeatNumbers.filter(number => number == seat.seatNumber).length > 0) {
            seatBuffer = {...seat, isActive: true}
            console.log(seatBuffer);
        }

        if (seatBuffer.seatNumber < 29) leftSeats[seatBuffer.seatNumber] = seatBuffer;
        else rightSeats[seatBuffer.seatNumber] = seatBuffer;
    });

    return (
        <div className="seating-wrapper">
            <div className="left-table">
            {
                leftSeats.map(seat => <SeatIcon key={seat.id} seat={seat}/>)
            }
            </div>
            <div className="right-table">
            {
                rightSeats.map(seat => <SeatIcon key={seat.id} seat={seat}/>)
            }
            </div>
        </div>
    )
}
