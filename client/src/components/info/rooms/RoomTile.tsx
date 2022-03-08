import { faBed, faMoon } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { Room } from "../../../models/Room";

export function RoomTile(props: {room: Room, activeGuestNames: String[]}) {
    const [isActive, setIsActive] = useState(false);
    const icon = isActive 
        ? <FontAwesomeIcon icon={faBed} className="icon bed"/> 
        : <FontAwesomeIcon icon={faMoon} className="icon"/>;

    return (
        <div className={`room-tile ${isActive ? "active-tile" : ""}`}>
            {icon}
            <div className="room-number">{props.room.roomNumber}</div>
            <div className="room-guests">
                {props.room.guestNames.map(guest => {
                    let style = (props.activeGuestNames.includes(guest)) ? "active-guest" : "";
                    if (!isActive && style === "active-guest") setIsActive(true);
                    return <div className={style}>{guest}</div>
                })}
            </div>
        </div>
    )
}