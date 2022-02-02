import styles from './admin.module.css';
import { Guest } from "../../models/Guest";

export function AdminHome(props: {guests: Guest[]}) {

    return (
        <div>
            <h3></h3>
            <table className={styles.tightTable}>
                <thead>
                    <th>Name</th>
                    <th>Starter</th>
                    <th>Main</th>
                    <th>Dessert</th>
                    <th>Diet</th>
                </thead>
                {guestRows(props.guests.filter(guest => guest.starter?.toString() && guest.main?.toString() && guest.dessert?.toString()), "chosen")}
                {guestRows(props.guests.filter(guest => !guest.starter || !guest.main || !guest.dessert), "pending")}
            </table>
        </div>
    )
}

function guestRows(guests: Guest[], style: string) {
    return(
        <tbody className={`${style}body`}>
            {guests.map(guest => guestSimpleRow(guest, style))}
        </tbody>
    )
}

function guestSimpleRow(guest: Guest, style: string) {
    return (
        <tr className={`${style}row`}>
            <td>{`${guest.name} ${guest.family}`}</td>
            <td>S{guest.starter?.toString() ? guest.starter + 1 : "-"}</td>
            <td>M{guest.main?.toString() ? guest.main + 1 : "-"}</td>
            <td>D{guest.dessert?.toString() ? guest.dessert + 1 : "-"}</td>
            <td>{guest.diet}</td>
        </tr>
    )
}
