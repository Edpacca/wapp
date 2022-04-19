import { Seat } from "../../../models/Seat"
import { faSeedling, faUser } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SeatIcon = (props: { seat: Seat }) => {

    const isBrideGroom = props.seat.seatNumber == 12 || props.seat.seatNumber == 14
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
