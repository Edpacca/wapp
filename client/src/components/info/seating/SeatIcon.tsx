import { Seat } from "../../../models/Seat"
import { faSeedling } from "@fortawesome/free-solid-svg-icons"
import ringL from '../../../assets/sprites/ring-L.svg';
import ringR from '../../../assets/sprites/ring-R.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export const SeatIcon = (props: { seat: Seat }) => {

    const isBrideGroom = props.seat.seatNumber === 12 || props.seat.seatNumber === 14
    const seatStyle = isBrideGroom ? "seat bride-groom" : "seat"
    
    return(
        <div className={seatStyle}>
            <div className="seat-number">{
                isBrideGroom 
                    ? <img src={props.seat.seatNumber === 12 ? ringL : ringR} alt="rings"/> 
                    : props.seat.isActive ? <FontAwesomeIcon icon={faSeedling}/> : "" }</div>
            {
                props.seat.guestName &&
                <div className="occupant">{props.seat.guestName}</div>
            }
        </div>
    )
}
