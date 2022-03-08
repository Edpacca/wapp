import { Guest } from "../../../models/Guest";
import { GuestSimpleRow } from "./GuestSimpleRow";

export function GuestRows(guests: Guest[], style: string) {
    return(
        <tbody className={`${style}body`}>
            {guests.map(guest => GuestSimpleRow(guest, style))}
        </tbody>
    )
}
