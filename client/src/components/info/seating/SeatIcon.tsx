import { Seat } from "../../../models/Seat"
import { faSeedling, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SeatIcon = (props: { seat: Seat }) => {

    const isBrideGroom = props.seat.seatNumber == 2 || props.seat.seatNumber == 3
    const seatStyle = isBrideGroom ? "seat bride-groom" : props.seat.isActive ? "seat active" : "seat"
    
    return(
        <div className={seatStyle}>
            <div className="seat-title">
            {
                isBrideGroom 
                    ? <FontAwesomeIcon icon={faSeedling}/>
                    : props.seat.isActive ? <FontAwesomeIcon icon={faUser}/> : "" 
            }
            </div>
            {
                props.seat.guestName &&
                <div className="occupant">{props.seat.guestName}</div>
            }
        </div>
    )
}
