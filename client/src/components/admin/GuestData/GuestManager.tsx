import { Guest } from "../../../models/Guest";
import { FamilyTable } from './FamilyTable';

export function GuestManager(props: { guests: Guest[] }) {

    const familyNames: string[] = [...new Set(props.guests.map(guest => guest.family))];
    const families: Guest[][] = familyNames.map(family => props.guests.filter(guest => guest.family === family));

    return (
        <div>
            {families.map(family => <FamilyTable guests={family}/>)}
        </div>
    )
}
