import { Seat } from "../../../models/Seat"

export const SeatIcon = (props: { seat: Seat }) => {
    return(
        <div className="seat">
            <div className="seat-number">{props.seat.seatNumber}</div>
            {
                props.seat.guestName &&
                <div className="occupant">{props.seat.guestName}</div>
            }
        </div>
    )
}
