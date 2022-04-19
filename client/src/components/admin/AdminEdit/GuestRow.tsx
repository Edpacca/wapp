import { useState } from "react"
import { useAppDispatch } from "../../../store/hooks";
import { foodItem } from "../../../models/FoodItem";
import { Guest } from "../../../models/Guest";
import { stageDeletedGuest, stageGuest, unstageDeletedGuest, unstageGuest } from "../adminSlice";
import { GuestRowActive } from "./GuestRowActive";
import { GuestRowInactive } from "./GuestRowInactive";

export function GuestRow(props: {guest: Guest, mains: foodItem[], desserts: foodItem[]}) {
    const [canEdit, setCanEdit] = useState(false);
    const [canDelete, setCanDelete] = useState(false);
    const dispatch = useAppDispatch();

    function setCanEditDispatch() {
        setCanEdit(!canEdit);
        // we want canEdit but use !canEdit as state isn't updated
        if (!canEdit) dispatch(stageGuest(props.guest));
        else {
            dispatch(unstageGuest(props.guest));
            dispatch(unstageDeletedGuest(props.guest));
            setCanDelete(false)
        }
    }

    function setCanDeleteDispatch() {
        setCanDelete(!canDelete);
        if (!canDelete) {
            dispatch(stageDeletedGuest(props.guest));
            dispatch(unstageGuest(props.guest));
        } 
        else {
            dispatch(unstageDeletedGuest(props.guest));
            dispatch(stageGuest(props.guest));
        } 
    }

    return (
        canEdit && !canDelete
        ? <GuestRowActive 
            guest={props.guest} mains={props.mains} desserts={props.desserts} 
            active={canEdit} setActive={setCanEditDispatch} canDelete={canDelete} setCanDelete={setCanDeleteDispatch} /> 
        : <GuestRowInactive guest={props.guest} mains={props.mains} desserts={props.desserts} 
            active={canEdit} setActive={setCanEditDispatch} canDelete={canDelete} setCanDelete={setCanDeleteDispatch}/>
    )
}
