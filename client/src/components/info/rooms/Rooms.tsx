import { Room } from "../../../models/Room";
import { RoomTile } from "./RoomTile";

export function Rooms(props: {activeGuestNames: String[], rooms: Room[] }) {
    return (
        <div className="rooms-wrapper">
            <h2 className="text-header">House at the Bridge of Lochay</h2>
            <div className="rooms-grid">
                {props.rooms.map(room => <RoomTile room={room} activeGuestNames={props.activeGuestNames}/>)}
            </div>
        </div>
    )
}