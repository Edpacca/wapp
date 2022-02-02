import styles from '../admin.module.css';
import { Guest } from "../../../models/Guest";
import { foodItem } from '../../../models/FoodItem';

export function GuestRowActive(props: {guest: Guest, canEdit: boolean, setCanEdit: (b: boolean) => void, starters: foodItem[], mains: foodItem[], desserts: foodItem[]}) {
    return (
        <tr className={styles.adminTable} key={`${props.guest.family + props.guest.name}`}>
        <td><input type="checkbox" checked={props.canEdit} onChange={() => props.setCanEdit(!props.canEdit)} className={styles.checkbox}/></td>
        <td><p className={styles.link} onClick={(e) => {e.preventDefault(); copyId(props.guest.id);}}>{props.guest.id}</p></td>
        <td><input className={styles.tableTextInput} placeholder={props.guest.name}></input></td>
        <td>{renderDropDown(props.starters, props.guest.starter, `${props.guest.id}-starter`)}</td>
        <td>{renderDropDown(props.mains, props.guest.main, `${props.guest.id}-main`)}</td>
        <td>{renderDropDown(props.desserts, props.guest.dessert, `${props.guest.id}-dessert`)}</td>
        <td><input className={styles.tableTextInput} placeholder={props.guest.diet}></input></td>
    </tr>
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
