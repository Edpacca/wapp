import { Guest } from '../../models/Guest';
import { starters, mains, desserts } from '../../data/menuData';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export function SubmitGuestChoiceModal(props: {guest: Guest, languageIndex: 0 | 1, setIsVisible: (isVisible: boolean) => void, submit: () => void}) {

    return(
        <div className="modalBox">
            <h3>Submitting {props.guest.name}'s choices</h3>
            <div className="modalChoices">
                <p className="modalCourse">Starter:</p>
                <p>{props.guest.starter != undefined ? starters[props.guest.starter].name[props.languageIndex] : "none"}</p>
                <p className="modalCourse">Main Course:</p>
                <p>{props.guest.main != undefined ? mains[props.guest.main].name[props.languageIndex] : "none"}</p>
                <p className="modalCourse">Dessert:</p>
                <p>{props.guest.dessert != undefined ? desserts[props.guest.dessert].name[props.languageIndex] : "none"}</p>
                <p className="modalCourse">Dietary Requirements:</p>
                <p>{props.guest.diet && (props.guest.diet as string).length > 0 ? props.guest.diet : "none"}</p>
            </div>
            <button className="modalButtonOrange" onClick={() => props.setIsVisible(false)}>Cancel &nbsp; <FontAwesomeIcon icon={faXmark}/></button>
            <button className="modalButtonGreen" onClick={() => props.submit()}>Submit &nbsp; <FontAwesomeIcon icon={faCheck}/></button>
        </div>
    )
}
