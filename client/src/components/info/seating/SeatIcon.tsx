import { Seat } from "../../../models/Seat"
import { faSeedling, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SeatIcon = (props: { seat: Seat }) => {

    const isBrideGroom = props.seat.seatNumber == 2 || props.seat.seatNumber == 3
    const seatStyle = isBrideGroom ? "seat bride-groom" : props.seat.isActive ? "seat active" : "seat"
    
    return(
        <div className={seatStyle}>
            {
                isBrideGroom 
                    ? <div className="seat-title"><FontAwesomeIcon icon={faSeedling}/></div> 
                    : props.seat.isActive ? <div className="seat-title"><FontAwesomeIcon icon={faUser}/></div> 
                    : <div> {props.seat.guestName} </div> 
            }
            {
                props.seat.guestName &&
                <div className="occupant">{props.seat.guestName}</div>
            }
        </div>
    )
}
