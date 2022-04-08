import { Guest } from "../../../models/Guest";

export function GuestSimpleRow(guest: Guest, style: string) {
    return (
        <tr className={`${style}row`}>
            <td>{`${guest.name} ${guest.family}`}</td>
            <td>{guest.main?.toString() ? `M${guest.main + 1}` : "-"}</td>
            <td>{guest.dessert?.toString() ? `D${guest.dessert + 1}` : "-"}</td>
            <td>{guest.diet}</td>
            <td>{guest.seat}</td>
            <td>{guest.room}</td>
        </tr>
    )
}
