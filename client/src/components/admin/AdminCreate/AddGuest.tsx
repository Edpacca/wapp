import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { AddGuestRequest } from "../../../models/CreateFamily";
import { addGuestToFamily, selectFamilies } from '../adminSlice';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";

export function AddGuest() {
    
    const familyNames: string[] = useAppSelector(selectFamilies);
    const dispatch = useAppDispatch();

    const [name, setName] = useState<string>("");
    const [surname, setSurname] = useState<string>("");
    const [family, setFamily] = useState<string>("");

    function addGuest() {

        if (name === "" || family === "") return;

        const newGuest: AddGuestRequest = {
            family: family,
            name: name,
            surname: surname
        }

        dispatch(addGuestToFamily(newGuest));
    }

    function renderDropDown(families: string[]) {
        return (
            <select className="familyDropDown" onChange={(e) => setFamily(e.target.value)}>
                <option className="tableOption">Select Family</option>
                {families.map(family => <option 
                className="tableOption"
                key={`${family}options`} value={family}
                >{family}</option>)}
            </select>
        )
    }

    return(
        <div className="adminInputs">
            <p>Add Guest</p>
            {renderDropDown(familyNames)}
            <div>
                <input 
                    type="text" 
                    className="textbox login" 
                    placeholder={`Name`}
                    onChange={(e) => setName(e.target.value)}
                    >
                </input>
                <input 
                    type="text" 
                    className="textbox login" 
                    placeholder={`Surname`}
                    onChange={(e) => setSurname(e.target.value)}
                    >
                </input>
            </div>
                <button 
                    onClick={() => addGuest()}
                    className="button login">
                        Add Guest &nbsp; <FontAwesomeIcon icon={faPlus}/>
                </button>
        </div>
    )
}


