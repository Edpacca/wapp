import { Guest } from "../../models/Guest";
import { starters, mains, desserts } from '../../data/menuData';
import { CourseType } from "../../models/Course";

export function GuestListChoices(props: { guests: Guest[], setActiveGuest: (guest: Guest) => void }) {

    const guestChoices = props.guests.map(guest => renderGuestChoices(guest, props.setActiveGuest))

    return <div>{guestChoices}</div>
}

function renderGuestChoices(guest: Guest, setActiveGuest: (guest: Guest) => void) {
    return (
        <div>
            <div>
                {guest.name}
                <button className="button" onClick={() => setActiveGuest(guest)}>Edit choices</button>
            </div>
            <ul>
                <li key={`${guest.name}starter`}><strong>Starter:</strong> {parseChoice(guest.starter, "starter")}</li>
                <li key={`${guest.name}main`}><strong>Main:</strong> {parseChoice(guest.main, "main")}</li>
                <li key={`${guest.name}dessert`}><strong>Dessert:</strong> {parseChoice(guest.dessert, "dessert")}</li>
                <li key={`${guest.name}diet`}><strong>Dietary Requirements:</strong> {guest.diet ? guest.diet : "None"}</li>
            </ul>
        </div>
    )

    function parseChoice(choice: number | undefined, course: CourseType ) {
        if (!choice) return "Not chosen";

        switch (course) {
            case course = 'starter':
                return starters[choice];
            case course = 'main':
                return mains[choice];
            case course = 'dessert':
                return desserts[choice];
            default:
                return "";
        }
    }
}
