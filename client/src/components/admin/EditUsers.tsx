import styles from './admin.module.css';
import { Guest } from "../../models/Guest";
import { GuestManager } from "./GuestData/GuestManager";
import { SubmitUsersModal } from './SubmitUsersModal';
import { useState } from 'react';

export function EditUsers(props: {guests: Guest[]}) {

    const [isModalVisible, setIsModalVisible] = useState(false);

    return (

        <div className={styles.manager}>
            {
                isModalVisible &&
                <SubmitUsersModal setIsVisible={setIsModalVisible} />
            }
            <GuestManager guests={props.guests} />
            {
                !isModalVisible &&
                <button onClick={() => setIsModalVisible(true)} className="button login">
                     Submit Edits
                </button>
            }


        </div>
    )
}


