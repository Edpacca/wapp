import { Guest } from '../../models/Guest';
import { starters, mains, desserts } from '../../data/menuData';

export function SubmitGuestChoiceModal(props: {guest: Guest, languageIndex: 0 | 1, setIsVisible: (isVisible: boolean) => void, submit: () => void}) {

    return(
        <div className="modalBox">
            <h3>Submitting {props.guest.name}'s choices</h3>
            <div className="modalChoices">
                <p className="modalCourse">Starter:</p>
                <p>{props.guest.starter !== undefined && props.guest.starter !== null ? starters[props.guest.starter].name[props.languageIndex] : "none"}</p>
                <p className="modalCourse">Main Course:</p>
                <p>{props.guest.main !== undefined && props.guest.main !== null ? mains[props.guest.main].name[props.languageIndex] : "none"}</p>
                <p className="modalCourse">Dessert:</p>
                <p>{props.guest.dessert !== undefined && props.guest.dessert !== null ? desserts[props.guest.dessert].name[props.languageIndex] : "none"}</p>
                <p className="modalCourse">Dietary Requirements:</p>
                <p>{props.guest.diet && (props.guest.diet as string).length > 0 ? props.guest.diet : "none"}</p>
            </div>
            <button className="modalButton" onClick={() => props.setIsVisible(false)}>Cancel</button>
            <button className="modalButton" onClick={() => props.submit()}>Submit</button>
        </div>
    )
}
