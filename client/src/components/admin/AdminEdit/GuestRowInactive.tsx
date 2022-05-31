import { Guest } from "../../../models/Guest";
import { foodItem } from '../../../models/FoodItem';

export function GuestRowInactive(props: {guest: Guest, active: boolean, setActive: () => void, canDelete: boolean, setCanDelete: () => void,
     mains: foodItem[], desserts: foodItem[]}) {
    return (
        <tr className={props.canDelete ? "adminTableDelete" : "adminTable"} key={`${props.guest.family + props.guest.name}`}>
            <td className="tableCheckbox"><input type="checkbox" checked={props.active} onChange={() => props.setActive()} className="checkbox"/></td>
            {/* <td><p className="link">{props.guest.id}</p></td> */}
            <td className="tableText">{props.guest.name}</td>
            <td className="tableText">{props.guest.surname}</td>
            <td className="tableText course">{props.guest.main?.toString() ? props.mains[props.guest.main].name[0] : "-"}</td>
            <td className="tableText course">{props.guest.dessert?.toString() ? props.desserts[props.guest.dessert].name[0] : "-"}</td>
            <td className="tableText">{props.guest.diet}</td>
            <td className="tableText">{props.guest.seat}</td>
            <td className="tableText">{props.guest.room}</td>
            <td className="tableCheckbox">{props.canDelete && <input type="checkbox" checked={props.canDelete} onChange={() => props.setCanDelete()} className="checkbox"/>}</td>
        </tr>
    )
}
