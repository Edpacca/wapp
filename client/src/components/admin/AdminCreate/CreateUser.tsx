import styles from '../admin.module.css';
import { useAppDispatch } from "../../../store/hooks";
import { useState } from "react";
import { registerUser } from "../adminSlice";
import { CreateFamily } from "../../../models/CreateFamily";

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
        (document.getElementById(`name${1}`) as HTMLInputElement).value = "";
        return newFamily;
    }

    return(
        <div className='center'>
            <p>Create Family</p>
        <div className={styles.adminInputs}>
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
                    className={styles.plusMinusButton}>
                        &#9547;
                </button>
                <button 
                    onClick={() => {const count = Math.max(1, memberCount - 1);
                        setMemberCount(count)}} 
                    className={styles.plusMinusButton}>
                        &minus;
                </button>
                <div className={styles.adminInputs}>
                    { renderMembers(memberCount) }
                </div>
            </div>
                <button 
                    onClick={() => dispatch(registerUser(CreateFamily()))}
                    className="button login">
                        Register Family
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


