import styles from './food.module.css';
import { useAppDispatch } from "../../app/hooks"
import { Guest } from '../../models/Guest';

export function SubmitUsersModal(props: {guest: Guest, setIsVisible: (isVisible: boolean) => void}) {
    const dispatch = useAppDispatch();
    
    function submit() { 
        dispatch();
    }

    return(
        <div className={styles.modalBox}>
            <h3>Submitting {props.guest.name}'s choices</h3>

            <button className={styles.modalButton} onClick={() => props.setIsVisible(false)}>Cancel</button>
            <button className={styles.modalButton} onClick={() => submit()}>Submit</button>
        </div>
    )
}
