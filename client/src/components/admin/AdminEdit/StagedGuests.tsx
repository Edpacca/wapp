import { Guest } from "../../../models/Guest";
import { GuestRows } from '../AdminSummary/GuestRows';

export function StagedGuests(props: {guests: Guest[], css?: string}) {
    return (
        <div className={props.css ?? ""}>
            <table className="tightTable">
                <thead>
                    <th>Name</th>
                    <th>Main</th>
                    <th>Dessert</th>
                    <th>Diet</th>
                    <th>Seat</th>
                    <th>Room</th>
                </thead>
                {GuestRows(props.guests, "chosen")}
            </table>
        </div>
    )
}



