import { mains, desserts } from '../../../data/menuData';
import { Guest } from "../../../models/Guest";
import { GuestRow } from './GuestRow';

export function FamilyMembersTable(props: {guests: Guest[]}) {

    return (
        <table className="guestTable">
            <thead className="tableHeaders">
                    <th></th>
                    {/* <th>Id</th> */}
                    <th>Name</th>
                    <th>Main</th>
                    <th>Dessert</th>
                    <th>Diet</th>
                    <th>Seat</th>
                    <th>Room</th>
                    <th>Delete</th>
            </thead>
            <tbody>
            {
                props.guests.map(guest => <GuestRow guest={guest} mains={mains} desserts={desserts}/>)
            }
            </tbody>
        </table>
    )
}

