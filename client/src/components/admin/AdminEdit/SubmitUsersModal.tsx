import styles from '../admin.module.css';
import { useAppDispatch, useAppSelector } from "../../../store/hooks"
import { clearStagedGuests, commitGuestEdits, getGuests, selectStagedDeletedGuests, selectStagedGuests } from "../adminSlice"
import { StagedGuests } from "./StagedGuests";

export function SubmitUsersModal(props: {setIsVisible: (isVisible: boolean) => void}) {

    const stagedGuests = useAppSelector(selectStagedGuests);
    const stagedDeletedGuests = useAppSelector(selectStagedDeletedGuests);
    const dispatch = useAppDispatch();
    
    function submit() { 
        dispatch(commitGuestEdits({ edits: stagedGuests, deletes: stagedDeletedGuests }));
        dispatch(clearStagedGuests());
        props.setIsVisible(false);
        dispatch(getGuests());
    }

    return(
        <div className={styles.modalBox}>
            <h3>Edited Guests: {stagedGuests.length}</h3>
            <StagedGuests guests={stagedGuests}/>
            {   
                stagedDeletedGuests.length > 0 &&
                <>
                <h3 className='delete'>Deleted Guests: {stagedDeletedGuests.length}</h3>
                <StagedGuests guests={stagedDeletedGuests} css={"delete"}/>
                </>
            }

            <button className={styles.modalButton} onClick={() => props.setIsVisible(false)}>Cancel</button>
            <button className={styles.modalButton} onClick={() => submit()}>Submit</button>
        </div>
    )
}
