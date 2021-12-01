import './admin.css';
import { useContext, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { CreateFamily } from "../../models/CreateFamily";
import { Guest } from "../../models/Guest";
import { adminLogout, getGuests, registerUser, selectGuests } from "./adminSlice";
import { GuestManager } from "./GuestManager";
import AuthContext from '../../context/AuthContext';

export function AdminDashboard() {

    const dispatch = useAppDispatch();
    const guests: Guest[] = useAppSelector(selectGuests);
    const [family, setFamily] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const [memberCount, setMemberCount] = useState<number>(1);
    const { getAdminLoggedIn } = useContext(AuthContext);

    function CreateFamily(): CreateFamily {

        const members: string[] = [];

        for (let i = 0; i < memberCount; i++) {

            var text = (document.getElementById(`name${i}`) as HTMLInputElement).value;
            members.push(text);
        }

        const newFamily: CreateFamily = {
            family: family,
            password: password,
            members: members,
        }

        setFamily("");
        setPassword("");
        setMemberCount(1);
        (document.getElementById(`name${1}`) as HTMLInputElement).value = "";
        return newFamily;
    }

    async function logout() {
        dispatch(adminLogout());
        await getAdminLoggedIn();
    }

    return(
        <div className="App-header">
            <button onClick={() => logout()} className="button">Logout</button>
            <p>Admin Page</p>
            <div className="admin-inputs">
                <input type="text" className="textbox login" placeholder="Family" id="family-input" value={family} onChange={(e) => setFamily(e.target.value)}></input>
                <input type="text" className="textbox login" placeholder="Password" id="password-input" value={password} onChange={(e) => setPassword(e.target.value)}></input>
            </div>
            
            <div>

                <button onClick={() => setMemberCount(memberCount + 1)} className="plus-minus-button">&#9547;</button>
                <button onClick={() => {const count = Math.max(1, memberCount - 1); setMemberCount(count)}} className="plus-minus-button">&minus;</button>
                <div className="admin-inputs">
                {
                    renderMembers(memberCount)
                }
                </div>
            </div>
                <button onClick={() => dispatch(registerUser(CreateFamily()))} className="button login">Register Family</button>
                <button onClick={() => dispatch(getGuests())} className="button login">GetGuests</button>

            {
                <div className="manager">
                    <GuestManager guests={guests} />
                </div>
            }
        </div>
    )
}

function renderMembers(count: number) {
    return ([...Array(count)].map((value: undefined, index: number) => {
        return <input type="text" className="textbox login" placeholder={`Name ${index}`} id={`name${index}`} key={`name${index}`}></input>
    }))
}