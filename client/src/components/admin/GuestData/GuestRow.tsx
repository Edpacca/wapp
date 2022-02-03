import { useState } from "react"
import { useAppDispatch } from "../../../app/hooks";
import { foodItem } from "../../../models/FoodItem";
import { Guest } from "../../../models/Guest";
import { stageGuest, unstageGuest } from "../adminSlice";
import { GuestRowActive } from "./GuestRowActive";
import { GuestRowInactive } from "./GuestRowInactive";

export function GuestRow(props: {guest: Guest, starters: foodItem[], mains: foodItem[], desserts: foodItem[]}) {
    const [canEdit, setCanEdit] = useState(false);
    const dispatch = useAppDispatch();

    function setCanEditDispatch() {
        setCanEdit(!canEdit);
        if (!canEdit) dispatch(stageGuest(props.guest));
        else dispatch(unstageGuest(props.guest));
    }

    return (
        canEdit 
        ? <GuestRowActive guest={props.guest} starters={props.starters} mains={props.mains} desserts={props.desserts} active={canEdit} set={setCanEditDispatch} /> 
        : <GuestRowInactive guest={props.guest} starters={props.starters} mains={props.mains} desserts={props.desserts} active={canEdit} set={setCanEditDispatch}/>
    )
}
