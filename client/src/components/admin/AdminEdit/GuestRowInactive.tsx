import { Guest } from "../../../models/Guest";
import { foodItem } from '../../../models/FoodItem';

export function GuestRowInactive(props: {guest: Guest, active: boolean, setActive: () => void, canDelete: boolean, setCanDelete: () => void,
     starters: foodItem[], mains: foodItem[], desserts: foodItem[]}) {
    return (
        <tr className={props.canDelete ? "adminTableDelete" : "adminTable"} key={`${props.guest.family + props.guest.name}`}>
        <td><input type="checkbox" checked={props.active} onChange={() => props.setActive()} className="checkbox"/></td>
        <td><p className="link">{props.guest.id}</p></td>
        <td><p className="tableText">{props.guest.name}</p></td>
        <td><p className="tableText">{props.guest.starter?.toString() ? props.starters[props.guest.starter].name[0] : "-"}</p></td>
        <td><p className="tableText">{props.guest.main?.toString() ? props.mains[props.guest.main].name[0] : "-"}</p></td>
        <td><p className="tableText">{props.guest.dessert?.toString() ? props.desserts[props.guest.dessert].name[0] : "-"}</p></td>
        <td><p className="tableText">{props.guest.diet}</p></td>
        <td><p className="tableText">{props.guest.seat}</p></td>
        <td>{props.canDelete && <input type="checkbox" checked={props.canDelete} onChange={() => props.setCanDelete()} className="checkbox"/>}</td>
    </tr>
    )
}
