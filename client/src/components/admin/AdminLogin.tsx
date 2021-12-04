import AuthContext from '../../context/AuthContext';
import { useContext, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { AdminAuthenticationRequest } from "../../models/AdminAuthenticationRequest";
import { adminLogin, selectAdminStatus } from "./adminSlice";

export function AdminLogin() {

    const dispatch = useAppDispatch();
    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const status = useAppSelector(selectAdminStatus);
    const { getAdminLoggedIn } = useContext(AuthContext);

    function captureLogin() {
        if (name && password) {
            const request: AdminAuthenticationRequest = {
                name: name,
                password: password
            }
            dispatch(adminLogin(request)).then(() => getAdminLoggedIn());
        }
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.key === 'Enter') {
            e.preventDefault();
            captureLogin();
        }
    }

    return(
        <div className="App-header">
            <p>Admin Login</p>
            <input 
                type="text" 
                className={`textbox ${status}`} 
                placeholder={   
                    status === 'failed' 
                    ? "Invalid Credentials" 
                    : "Admin"
                } 
                id="name" 
                onChange={(e) => setName(e.target.value)}
                >
            </input>
            <input 
                type="password" 
                className={`textbox ${status}`} 
                placeholder={
                    status === 'failed' 
                    ? "Invalid Credentials" 
                    : "Password"} 
                id="password" 
                onChange={(e) => setPassword(e.target.value)}
                onKeyPress={(e) => handleKeyPress(e)}>
            </input>
            <button
                onClick={() => captureLogin()} 
                className="button login">
                    Login
            </button>
        </div>
    )
}