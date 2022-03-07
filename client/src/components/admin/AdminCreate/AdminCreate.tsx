import { AddGuest } from "./AddGuest";
import { CreateUser } from "./CreateUser";

export function AdminCreate() {
    return (
        <div className="createGrid">
            <div>
                <CreateUser />
            </div>
            <div>
                <AddGuest />
            </div>
        </div>
    )
}
