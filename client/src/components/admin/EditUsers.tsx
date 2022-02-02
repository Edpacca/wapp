import styles from './admin.module.css';
import { Guest } from "../../models/Guest";
import { GuestManager } from "./GuestData/GuestManager";

export function EditUsers(props: {guests: Guest[]}) {


    return (
        <div className={styles.manager}>
            {
                <div >
                    <GuestManager guests={props.guests} />
                </div>
            }
                <button onClick={() => {}} 
                className="button login">
                    Submit Edits
            </button> 
        </div>
    )
}


