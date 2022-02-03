import styles from './admin.module.css';
import { Guest } from "../../models/Guest";
import { GuestManager } from "./GuestData/GuestManager";
import { SubmitUsersModal } from './SubmitUsersModal';

export function EditUsers(props: {guests: Guest[]}) {
    return (
        <div className={styles.manager}>
            <GuestManager guests={props.guests} />
            <button onClick={() => {}} className="button login">
                    Submit Edits
            </button>
            <SubmitUsersModal />
        </div>
    )
}


