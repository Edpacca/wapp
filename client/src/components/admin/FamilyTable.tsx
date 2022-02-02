import styles from './admin.module.css';
import { Guest } from "../../models/Guest";
import {starters, mains, desserts} from '../../data/menuData';
import { foodItem } from '../../models/FoodItem';
import { useState } from 'react';

export function FamilyTable(props: {guests: Guest[]}) {

    const [isShown, setIsShown] = useState(false);

    const familyName = props.guests.length > 0 ? props.guests[0].family : "No fam data";

    return (
        <div className={styles.tableWrapper}>
            <div>
                <h3 className={styles.famTitle} onClick={() => setIsShown(!isShown)}>{familyName}</h3>
            </div>
            { isShown && renderFamilyTable(props.guests) }
        </div>
    )
}

function renderFamilyTable(guests: Guest[]) {
    return (
        <table className={styles.guestTable}>
        <thead>
            <tr className={styles.tableHeaders}>
                <th>Id</th>
                <th>Name</th>
                <th>Starter</th>
                <th>Main</th>
                <th>Dessert</th>
                <th>Diet</th>
            </tr>
        </thead>
        {
            <tbody>{renderGuestData(guests)}</tbody>
        }
        </table>
    )
}

function renderGuestData(guests: Guest[]) {
    return (
        guests.map(guest => {
            return(
                <tr className={styles.adminTable} key={`${guest.family + guest.name}`}>
                    <td><p className={styles.link} onClick={(e) => {e.preventDefault(); copyId(guest.id);}}>{guest.id}</p></td>
                    <td><input className={styles.tableTextInput} placeholder={guest.name}></input></td>
                    <td>{renderDropDown(starters, guest.starter, `${guest.id}-starter`)}</td>
                    <td>{renderDropDown(mains, guest.main, `${guest.id}-main`)}</td>
                    <td>{renderDropDown(desserts, guest.dessert, `${guest.id}-dessert`)}</td>
                    <td><input className={styles.tableTextInput} placeholder={guest.diet}></input></td>
                </tr>
            )
        })
    )
}

function renderDropDown(options: foodItem[], choice: number | undefined, name: string) {
    return (
        <select name={name} className={styles.tableDropDown}>
            <option className={styles.tableOption}></option>
            {options.map(option => <option className={styles.tableOption} key={name} value={option.value} selected={option.value === choice}>{option.name[0]}</option>)}
        </select>
    )
}

function copyId(id: string) {
    navigator.clipboard.writeText(id);

}
