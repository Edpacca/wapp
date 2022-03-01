import styles from '../admin.module.css';
import { Guest } from "../../../models/Guest";
import { GuestRows } from '../AdminHome/GuestRows';

export function StagedGuests(props: {guests: Guest[], css?: string}) {
    return (
        <div className={props.css ?? ""}>
            <table className={styles.tightTable}>
                <thead>
                    <th>Name</th>
                    <th>Starter</th>
                    <th>Main</th>
                    <th>Dessert</th>
                    <th>Diet</th>
                    <th>Seat</th>
                </thead>
                {GuestRows(props.guests, "chosen")}
            </table>
        </div>
    )
}



