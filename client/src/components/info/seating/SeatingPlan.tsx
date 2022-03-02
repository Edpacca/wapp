import { Seat } from "../../../models/Seat";
import { SeatIcon } from "./SeatIcon";

export const SeatingPlan = () => {
    
    const guestSeats: Seat[] = [];
    
    for (let i = 0; i < 50; i++) {
        guestSeats.push({ seatNumber: i, occupant: "Billy" })        
    }

    return (
        <div className="seating-wrapper">
            <div className="seating-grid">
            {
                guestSeats.map(seat => <SeatIcon seat={seat}/>)
            }
            </div>
        </div>
    )
}
