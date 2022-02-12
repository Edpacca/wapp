import { faCaretDown, faCaretUp, faCheck, faUserGroup } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { allChoicesMade } from "../../helpers/allChoicesMade";
import { Guest } from "../../models/Guest";

export function GuestDropDown(props: {placeholder: string, guests: Guest[], selectOption: (option: string) => void}) {
    
    const [isActive, setIsActive] = useState(false);

    const guestOptions = props.guests.map(guest => {

        const info = allChoicesMade(guest)
            ? <FontAwesomeIcon icon ={faCheck}/> 
            : <span className='info'>choose meal</span>;

        return (
            <div className={`dd-option inline dd-select`} onClick={() => props.selectOption(guest.id)}>
                <option key={guest.name}>
                    {guest.name} 
                </option>
                <span className='dd-option-icon'>
                    {info}
                </span>
            </div>
        )
    })

    return (
        <div className="dropdown-wrapper">
            <div className={`dropdown ${isActive ? 'dd-active' : ""}`} onClick={() => { 
                setIsActive(!isActive);
                props.selectOption("");
            }}>
                <span className='dd-icon'><FontAwesomeIcon icon={faUserGroup}/></span>
                <span>{props.placeholder}</span>
                {arrows(isActive)}
            </div>
            <div>
            {   
                isActive &&
                <div className="dd-options">
                    {guestOptions}
                </div>
            }
            </div>
        </div>
    )
}

function arrows(isActive: boolean) {
    const icon = isActive ? faCaretUp : faCaretDown;
    return (
        <span className='dd-icon dd-arrow right'>
            <FontAwesomeIcon icon={icon}/>
        </span>
    ) 
}