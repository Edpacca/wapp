import {starters, mains, desserts} from '../../../data/menuData';
import { Guest } from "../../../models/Guest";
import { GuestRow } from './GuestRow';

export function FamilyMembersTable(props: {guests: Guest[]}) {

    return (
        <table className="guestTable">
            <thead>
                <tr className="tableHeaders">
                    <th></th>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>Starter</th>
                    <th>Main</th>
                    <th>Dessert</th>
                    <th>Diet</th>
                    <th>Seat</th>
                    <th>Room</th>
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

