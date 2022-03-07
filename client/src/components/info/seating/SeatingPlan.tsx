import { Seat } from "../../../models/Seat";
import { useAppSelector } from "../../../store/hooks";
import { selectUserSeats } from "../../user/userSlice";
import { SeatIcon } from "./SeatIcon";

export const SeatingPlan = (props: {guestSeats: Seat[]}) => {

    const allSeats: Seat[] = [];

    for (let i = 0; i < 50; i++) allSeats.push({seatNumber: i});
    props.guestSeats.forEach(seat => {
        allSeats[seat.seatNumber] = seat;
    })

    return (
        <div className="seating-wrapper">
            <div className="seating-grid">
            {
                allSeats.map(seat => <SeatIcon seat={seat}/>)
            }
            </div>
        </div>
    )
}
