import { Guest } from "../../../models/Guest";
import { GuestRows } from './GuestRows';

export function AdminSummary(props: {guests: Guest[]}) {

    return (
        <div className="tight-table-wrapper">
            <h3>Guest Summmary</h3>
            <table className="tightTable">
                <thead>
                    <th>Name</th>
                    <th>Starter</th>
                    <th>Main</th>
                    <th>Dessert</th>
                    <th>Diet</th>
                    <th>Seat</th>
                    <th>Room</th>
                </thead>
                {GuestRows(props.guests.filter(guest => guest.starter?.toString() && guest.main?.toString() && guest.dessert?.toString()), "chosen")}
                {GuestRows(props.guests.filter(guest => guest.starter === null || guest.main === null || guest.dessert === null), "pending")}
            </table>
        </div>
    )
}


