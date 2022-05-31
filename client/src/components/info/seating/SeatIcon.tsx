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
                    : props.seat.guestName ? initials(props.seat.guestName)
                    : ""
            }
            </div> 
            {
                props.seat.guestName &&
                <div className="occupant">{nameWithLineBreak(props.seat.guestName)}</div>
            }
        </div>
    )
}

function nameWithLineBreak(name: string) {
    return (
        name.split(" ").map(line => {
            return <>{line}<br/></>
        })
    )
}

function initials(name: string) {
    const names = name.split(" ");

    if (names.length > 1) {
        return names[0].charAt(0) + names[1].charAt(0)
    } else {
        return names[0].charAt(0)
    }

}