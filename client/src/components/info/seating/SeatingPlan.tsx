import { Seat } from "../../../models/Seat";
import { SeatIcon } from "./SeatIcon";
import { SEAT_NUMBERS, TABLE_NUMBERS, GRID_LENGTH } from "../../../data/seatingData";

export const SeatingPlan = (props: {guestSeats: Seat[], activeGuestSeatNumbers: number[]}) => {

    const grid = [...Array(GRID_LENGTH).keys()];

    return (
        <div className="seating-wrapper">
            <div className="seating-grid">
            {
                grid.map(index => {
                    if (SEAT_NUMBERS.includes(index)) {
                        const seat = props.guestSeats.find(s => s.seatNumber == index) ?? {seatNumber: index}
                        return <SeatIcon seat={seat as Seat}/>
                    } else if (TABLE_NUMBERS.includes(index)) {
                        return <div className="table"/>
                    } else {
                        return <div/>
                    }
                })
            }
            </div>
        </div>
    )
}
