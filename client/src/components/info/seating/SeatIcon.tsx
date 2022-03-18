import { Seat } from "../../../models/Seat"
import { faSeedling,  } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SeatIcon = (props: { seat: Seat }) => {
    const isBrideGroom = props.seat.seatNumber == 12 || props.seat.seatNumber == 14
    const seatStyle = isBrideGroom ? "seat bride-groom" : "seat"
    return(
        <div className={seatStyle}>
            <div className="seat-number">{
                isBrideGroom 
                    ? <FontAwesomeIcon icon={faSeedling}/> 
                    : props.seat.isActive ? "<FontAwesomeIcon icon={faSeedling}/>" : "" }</div>
            {
                props.seat.guestName &&
                <div className="occupant">{props.seat.guestName}</div>
            }
        </div>
    )
}
