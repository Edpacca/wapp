import styles from './admin.module.css';
import { AddGuest } from "./AddGuest";
import { CreateUser } from "./CreateUser";

export function AdminCreate() {
    return (
        <div className={styles.createGrid}>
            <div>
                <CreateUser />
            </div>
            <div>
                <AddGuest />
            </div>
        </div>
    )
}
