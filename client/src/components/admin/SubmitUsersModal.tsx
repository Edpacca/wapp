import styles from './admin.module.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { commitGuestEdits, selectStagedGuests } from "./adminSlice"
import { StagedGuests } from "./GuestData/StagedGuests";


export function SubmitUsersModal() {

    const stagedGuests = useAppSelector(selectStagedGuests);
    const dispatch = useAppDispatch();
    
    return(
        <div className={styles.modalBox}>
            <h3>Staged Guests: {stagedGuests.length}</h3>
            <StagedGuests guests={stagedGuests}/>
            <button className={styles.modalButton}>Cancel</button>
            <button className={styles.modalButton} onClick={() => dispatch(commitGuestEdits(stagedGuests))}>Submit</button>
        </div>
    )
}
