import AuthContext from '../../context/AuthContext';
import { useContext, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AdminAuthenticationRequest } from "../../models/AdminAuthenticationRequest";
import { adminLogin, selectAdminStatus, getGuests } from "./adminSlice";

export function AdminLogin() {

    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const status = useAppSelector(selectAdminStatus);
    const { authenticateSession } = useContext(AuthContext);

    function captureLogin() {
        if (name && password) {
            const request: AdminAuthenticationRequest = {
                name: name,
                password: password
            }
            dispatch(adminLogin(request))
            .then(() => authenticateSession()
            .then(() => dispatch(getGuests())));
        }
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.key === 'Enter') {
            e.preventDefault();
            captureLogin();
        }
    }

    return(
        <form className="App-header" onSubmit={() => captureLogin()}>
            <p>Admin Login</p>
            <input
                required
                type="text" 
                className={`textbox ${status}`} 
                placeholder="Admin" 
                id="name" 
                onChange={(e) => setName(e.target.value)}
                >
            </input>
            <input 
                type="password" 
                required
                className={`textbox ${status}`} 
                placeholder="Password"
                id="password" 
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}>
            </input>
            <button
                type='submit'
                className="button login">
                    Login
            </button>
        </form>
    )
}
