import styles from '../admin.module.css';
import { Guest } from "../../../models/Guest";
import { foodItem } from '../../../models/FoodItem';
import { useState } from 'react';
import { useAppDispatch } from '../../../app/hooks';
import { editGuest } from '../adminSlice';

export function GuestRowActive(props: {guest: Guest, active: boolean, set: () => void, starters: foodItem[], mains: foodItem[], desserts: foodItem[]}) {

    const [guest, setGuest] = useState<Guest>(props.guest);
    type GuestParam = 'name' | 'starter' | 'main' | 'dessert' | 'diet';
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
            default:
                break;
        }

        setGuest(buffer);
        dispatch(editGuest(buffer));
    }

    function renderDropDown(options: foodItem[], choice: number | undefined, name: string, param: GuestParam) {
        return (
            <select name={name} className={styles.tableDropDown} onChange={(e) => updateGuest(e.target.value, param)}>
                <option className={styles.tableOption}></option>
                {options.map(option => <option 
                className={styles.tableOption} 
                key={name} value={option.value}
                selected={option.value === choice}
                >{option.name[0]}</option>)}
            </select>
        )
    }

    return (
        <tr className={styles.adminTable} key={`${props.guest.family + props.guest.name}`}>
        <td><input type="checkbox" checked={props.active} onChange={() => props.set()} className={styles.checkbox}/></td>
        <td><p className={styles.link} onClick={(e) => {e.preventDefault(); copyId(props.guest.id);}}>{props.guest.id}</p></td>
        <td><input className={styles.tableTextInput} placeholder={props.guest.name} onChange={(e) => updateGuest(e.target.value, 'name')}></input></td>
        <td>{renderDropDown(props.starters, props.guest.starter, `${props.guest.id}-starter`, 'starter')}</td>
        <td>{renderDropDown(props.mains, props.guest.main, `${props.guest.id}-main`, 'main')}</td>
        <td>{renderDropDown(props.desserts, props.guest.dessert, `${props.guest.id}-dessert`, 'dessert')}</td>
        <td><input className={styles.tableTextInput} placeholder={props.guest.diet} onChange={(e) => updateGuest(e.target.value, 'diet')}></input></td>
    </tr>
    )
}


function copyId(id: string) {
    navigator.clipboard.writeText(id);
}
