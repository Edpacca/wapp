import { Seat } from "../../../models/Seat";
import { SeatIcon } from "./SeatIcon";

export const SeatingPlan = (props: {guestSeats: Seat[], activeGuestSeats: number[]}) => {

    const leftSeats: Seat[] = [];
    const rightSeats: Seat[] = [];

    for (let i = 0; i < 50; i++) {
        if (i < 28) leftSeats.push({seatNumber: i});
        else rightSeats.push({seatNumber: i})
    }

    props.guestSeats.forEach(seat => {
        
        const seatBuffer = {...seat}
        if (props.activeGuestSeats.includes(seat.seatNumber)) {
            seatBuffer.isActive = true;
        }

        if (seatBuffer.seatNumber < 29) leftSeats[seatBuffer.seatNumber] = seatBuffer;
        else rightSeats[seatBuffer.seatNumber] = seatBuffer;
    })

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
