import '../../styles/loginStatus.css';
import { useState } from "react";
import { Guest } from "../../models/Guest";
import { allChoicesMade } from '../../helpers/allChoicesMade';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup, faCaretDown, faCaretUp, faCheck, faXmark } from '@fortawesome/free-solid-svg-icons';

export function LoginStatus(props: {family: string, guests: Guest[]}) {

    const [isActive, setIsActive] = useState(false);


    const familyList = props.guests.map(guest => {

        const info = allChoicesMade(guest)
            ? <FontAwesomeIcon icon ={faCheck}/> 
            : <><FontAwesomeIcon icon ={faXmark}/><span className='info'>choose meal</span></>;

        return (
            <div className='inline'>
                <option key={guest.name}>
                    {guest.name} 
                </option>
                <span className='icons right'>
                    {info}
                </span>
                {

                }
            </div>

        )
    });

    return (
        <div className="login-status-wrapper" onClick={() => setIsActive(!isActive)}>
            <div className={`login-status ${isActive ? 'active' : ""}`}>
                <span className='icons'><FontAwesomeIcon icon={faUserGroup}/></span>
                <span>{props.family}</span>
                {arrows(isActive)}
            </div>
            <div>
            {   
                isActive &&
                <div className="members">
                    {familyList}
                </div>
            }
            </div>
        </div>
    )
}

function arrows(isActive: boolean) {
    const icon = isActive ? faCaretUp : faCaretDown;
    return (
        <span className='icons arrow right'>
            <FontAwesomeIcon icon={icon}/>
        </span>
    ) 
}
