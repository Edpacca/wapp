import { Guest } from "../../../models/Guest";

export function GuestSimpleRow(guest: Guest, style: string) {
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
