import { useState } from "react"
import { foodItem } from "../../../models/FoodItem";
import { Guest } from "../../../models/Guest";
import { GuestRowActive } from "./GuestRowActive";
import { GuestRowInactive } from "./GuestRowInactive";

export function GuestRow(props: {guest: Guest, starters: foodItem[], mains: foodItem[], desserts: foodItem[]}) {
    const [canEdit, setCanEdit] = useState(false);
    return (
        canEdit 
        ? <GuestRowActive guest={props.guest} starters={props.starters} mains={props.mains} desserts={props.desserts} canEdit={canEdit} setCanEdit={setCanEdit} /> 
        : <GuestRowInactive guest={props.guest} starters={props.starters} mains={props.mains} desserts={props.desserts} canEdit={canEdit} setCanEdit={setCanEdit}/>
    )
}
