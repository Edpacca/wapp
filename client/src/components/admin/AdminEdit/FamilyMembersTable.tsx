import styles from '../admin.module.css';
import {starters, mains, desserts} from '../../../data/menuData';
import { Guest } from "../../../models/Guest";
import { GuestRow } from './GuestRow';

export function FamilyMembersTable(props: {guests: Guest[]}) {

    return (
        <table className={styles.guestTable}>
            <thead>
                <tr className={styles.tableHeaders}>
                    <th></th>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Starter</th>
                    <th>Main</th>
                    <th>Dessert</th>
                    <th>Diet</th>
                    <th>Seat</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
            {
                props.guests.map(guest => <GuestRow guest={guest} starters={starters} mains={mains} desserts={desserts} />)
            }
            </tbody>
        </table>
    )
}

