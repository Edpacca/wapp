import { Guest } from "../models/Guest";

export function allChoicesMade(guest: Guest): boolean {
    return (
        // eslint-disable-next-line
        guest.starter != undefined && 
        // eslint-disable-next-line
        guest.main != undefined && 
        // eslint-disable-next-line    
        guest.dessert != undefined
    )
}
