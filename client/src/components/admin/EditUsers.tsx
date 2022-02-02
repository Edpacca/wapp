import styles from './admin.module.css';
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { getGuests, selectGuests } from "./adminSlice";
import { Guest } from "../../models/Guest";
import { GuestManager } from "./GuestManager";

export function EditUsers() {

    const dispatch = useAppDispatch();
    const guests: Guest[] = useAppSelector(selectGuests);

    return (
        <div className={styles.manager}>
            <button onClick={() => dispatch(getGuests())} 
                className="button login">
                    GetGuests
            </button> 
            {
                <div >
                    <GuestManager guests={guests} />
                </div>
            }
                <button onClick={() => {}} 
                className="button login">
                    Submit Edits
            </button> 
        </div>
    )
}


