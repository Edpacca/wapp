import { Guest } from "../models/Guest";

export function allChoicesMade(guest: Guest): boolean {
    return (
        guest.main != undefined && 
        guest.dessert != undefined
    )
}
