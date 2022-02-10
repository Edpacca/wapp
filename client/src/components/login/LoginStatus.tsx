import '../../styles/loginStatus.css';
import { useState } from "react";
import { Guest } from "../../models/Guest";
import { allChoicesMade } from '../../helpers/allChoicesMade';

export function LoginStatus(props: {family: string, guests: Guest[]}) {

    const [isActive, setIsActive] = useState(false);


    const familyList = props.guests.map(guest => {
        return (
            allChoicesMade(guest) 
            ? <option key={guest.name}>{guest.name} &#10004;</option>
            : <option key={guest.name}>{guest.name} &#10008; choose dinner &#x1F37D;</option>
        )
    });

    return (
        <div className="login-status-wrapper" onClick={() => setIsActive(!isActive)}>
            <div className={`login-status ${isActive ? 'active' : ""}`}>
                {arrows(isActive)}
                <span>{`Logged in as ${props.family}`}</span>
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
    return (
        <span className='arrows'>
            {isActive ? <span>&#9651;</span> : <span>&#9661;</span>}
        </span>
    ) 
}
