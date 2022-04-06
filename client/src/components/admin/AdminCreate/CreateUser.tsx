import { useAppDispatch } from "../../../store/hooks";
import { useState } from "react";
import { registerFamily } from "../adminSlice";
import { CreateFamily } from "../../../models/CreateFamily";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFeatherPointed, faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

export function CreateUser() {

    const dispatch = useAppDispatch();
    const [family, setFamily] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [memberCount, setMemberCount] = useState<number>(1);

    function CreateFamily(): CreateFamily {

        const guests: string[] = [];

        for (let i = 0; i < memberCount; i++) {
            var text = (document
                .getElementById(`name${i}`) as HTMLInputElement).value;
            guests.push(text);
        }

        const newFamily: CreateFamily = {
            family: family,
            password: password,
            guests: guests,
        }

        setFamily("");
        setPassword("");
        setMemberCount(1);
        (document.getElementById(`name${0}`) as HTMLInputElement).value = "";
        return newFamily;
    }

    return(
        <div className='center'>
            <p>Create Family</p>
        <div className="adminInputs">
                <input 
                    required
                    pattern='^[A-Za-z]*$'
                    type="text" 
                    className="textbox login" 
                    placeholder="Family" 
                    id="family-input" 
                    value={family} 
                    onChange={(e) => setFamily(e.target.value)}>
                </input>
                <input 
                    required
                    type="text"
                    className="textbox login"
                    placeholder="Password"
                    id="password-input"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}>
                </input>
            </div>
            
            <div>
                <button 
                    onClick={() => setMemberCount(memberCount + 1)}
                    className="plusMinusButton">
                        <FontAwesomeIcon icon={faPlus}/>
                </button>
                <button 
                    onClick={() => {const count = Math.max(1, memberCount - 1);
                        setMemberCount(count)}} 
                    className="plusMinusButton">
                        <FontAwesomeIcon icon={faMinus}/>
                </button>
                <div className="adminInputs">
                    { renderMembers(memberCount) }
                </div>
            </div>
                <button 
                    onClick={() => dispatch(registerFamily(CreateFamily()))}
                    className="button login">
                        Register Family &nbsp; <FontAwesomeIcon icon={faFeatherPointed}/>
                </button>

        </div>
    )
}

function renderMembers(count: number) {
    return ([...Array(count)].map((value: undefined, index: number) => {
        return (
            <input 
                type="text" 
                className="textbox login" 
                placeholder={`Name ${index}`} 
                id={`name${index}`} 
                key={`name${index}`}>
            </input>)
        })
    )
}


