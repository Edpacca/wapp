import { Guest } from "../../../models/Guest";
import { foodItem } from '../../../models/FoodItem';
import { useState } from 'react';
import { useAppDispatch } from '../../../store/hooks';
import { editGuest } from '../adminSlice';

export function GuestRowActive(props: {guest: Guest, active: boolean, setActive: () => void,  canDelete: boolean, setCanDelete: () => void,
     starters: foodItem[], mains: foodItem[], desserts: foodItem[]}) {

    const [guest, setGuest] = useState<Guest>(props.guest);
    type GuestParam = 'name' | 'starter' | 'main' | 'dessert' | 'diet' | 'seat';
    const dispatch = useAppDispatch();

    function updateGuest(newValue: string | number, param: GuestParam) {

        const buffer: Guest = {...guest};

        switch (param) {
            case 'name':
                buffer.name = newValue as string;
                break;
            case 'starter':
                buffer.starter = newValue as number;
                break;
            case 'main':
                buffer.main = newValue as number;
                break;
            case 'dessert':
                buffer.dessert = newValue as number;
                break;
            case 'diet':
                buffer.diet = newValue as string;
                break;
            case 'seat':
                buffer.seat = newValue as number;
                break;
            default:
                break;
        }

        setGuest(buffer);
        dispatch(editGuest(buffer));
    }

    function renderDropDown(options: foodItem[], choice: number | undefined, name: string, param: GuestParam) {
        return (
            <select name={name} className="tableDropDown" onChange={(e) => updateGuest(e.target.value, param)}>
                <option className="tableOption"></option>
                {options.map(option => <option 
                className="tableOption" 
                key={name} value={option.value}
                selected={option.value === choice}
                >{option.name[0]}</option>)}
            </select>
        )
    }

    return (
    <tr className={props.canDelete ? "adminTableDelete" : "adminTable"} key={`${props.guest.family + props.guest.name}`}>
        <td><input type="checkbox" checked={props.active} onChange={() => props.setActive()} className="checkbox"/></td>
        <td><p className="link" onClick={(e) => {e.preventDefault(); copyId(props.guest.id);}}>{props.guest.id}</p></td>
        <td><input className="tableTextInput" placeholder={props.guest.name} onChange={(e) => updateGuest(e.target.value, 'name')}></input></td>
        <td>{renderDropDown(props.starters, props.guest.starter, `${props.guest.id}-starter`, 'starter')}</td>
        <td>{renderDropDown(props.mains, props.guest.main, `${props.guest.id}-main`, 'main')}</td>
        <td>{renderDropDown(props.desserts, props.guest.dessert, `${props.guest.id}-dessert`, 'dessert')}</td>
        <td><input className="tableTextInput" placeholder={props.guest.diet} onChange={(e) => updateGuest(e.target.value, 'diet')}></input></td>
        <td><input type="number" className="tableTextInput" placeholder={props.guest.seat?.toString()} onChange={(e) => updateGuest(e.target.value, 'seat')}></input></td>
        <td><input type="checkbox" checked={props.canDelete} onChange={() => props.setCanDelete()} className="checkbox"/></td>
    </tr>
    )
}


function copyId(id: string) {
    navigator.clipboard.writeText(id);
}
