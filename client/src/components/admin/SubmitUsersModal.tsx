import styles from './admin.module.css';
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import { clearStagedGuests, commitGuestEdits, getGuests, selectStagedGuests } from "./adminSlice"
import { StagedGuests } from "./GuestData/StagedGuests";

export function SubmitUsersModal(props: {setIsVisible: (isVisible: boolean) => void}) {

    const stagedGuests = useAppSelector(selectStagedGuests);
    const dispatch = useAppDispatch();
    
    function submit() { 
        dispatch(commitGuestEdits(stagedGuests));
        dispatch(clearStagedGuests());
        props.setIsVisible(false);
        dispatch(getGuests());
    }

    return(
        <div className={styles.modalBox}>
            <h3>Staged Guests: {stagedGuests.length}</h3>
            <StagedGuests guests={stagedGuests}/>
            <button className={styles.modalButton} onClick={() => props.setIsVisible(false)}>Cancel</button>
            <button className={styles.modalButton} onClick={() => submit()}>Submit</button>
        </div>
    )
}
