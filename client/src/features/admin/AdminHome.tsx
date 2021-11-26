import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { AuthenticationRequest } from "../../models/AuthenticationRequest";
import './admin.css';

export function AdminHome() {

    const dispatch = useAppDispatch();

    const [family, setFamily] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [memberCount, setMemberCount] = useState<number>(1);

    let members: string[] = [];

    function handleSubmit() {
        
    }

    return(
        <div className="App-header">
            <p>Admin Page</p>
            <div className="admin-inputs">
                <input type="text" className="textbox login" placeholder="Family" id="family" onChange={(e) => setFamily(e.target.value)}></input>
                <input type="text" className="textbox login" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
            </div>
           
            
            <div>
                {
                    for(i = 0; i <= memberCount; i++) {
                        return (
                            renderMemberInput(members.indexOf(member), member)
                        );
                    })
                }
                <button onClick={() => setMemberCount(memberCount + 1)} className="increase">+</button>
                <button onClick={() => {const count = memberCount === 0 ? 0 : memberCount - 1; setMemberCount(count)}} className="decrease">-</button>
            </div>
                <button onClick={() => handleSubmit()} className="button login">Create User</button>
        </div>
    )
}

function renderMemberInput(index: number, memberName: string) {
    <input type="text" className="textbox login" placeholder={`Name ${index}`} id={`name${index}`} onChange={(e) => memberName = (e.target.value)}></input>
}