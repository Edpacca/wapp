import { useAppSelector } from "../../../app/hooks";
import { Guest } from "../../../models/Guest";
import { selectFamilies } from "../adminSlice";
import { FamilyTable } from './FamilyTable';

export function GuestManager(props: { guests: Guest[] }) {

    const familyNames: String[] = useAppSelector(selectFamilies);
    const families: Guest[][] = familyNames.map(family => props.guests.filter(guest => guest.family === family));

    return (
        <div>
            {families.map(family => <FamilyTable guests={family}/>)}
        </div>
    )
}