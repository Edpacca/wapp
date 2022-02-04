import styles from './admin.module.css';
import { Guest } from "../../models/Guest";
import { GuestRows } from './GuestData/GuestRows';

export function AdminHome(props: {guests: Guest[]}) {

    return (
        <div>
            <h3>Guest Summmary</h3>
            <table className={styles.tightTable}>
                <thead>
                    <th>Name</th>
                    <th>Starter</th>
                    <th>Main</th>
                    <th>Dessert</th>
                    <th>Diet</th>
                </thead>
                {GuestRows(props.guests.filter(guest => guest.starter?.toString() && guest.main?.toString() && guest.dessert?.toString()), "chosen")}
                {GuestRows(props.guests.filter(guest => guest.starter === null || guest.main === null || guest.dessert === null), "pending")}
            </table>
        </div>
    )
}



