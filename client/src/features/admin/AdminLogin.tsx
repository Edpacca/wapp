import { useState } from "react";
import { useAppDispatch } from "../../app/hooks";
import { AdminAuthenticationRequest } from "../../models/AdminAuthenticationRequest";
import { adminLogin } from "./adminSlice";

export function AdminLogin() {
    const dispatch = useAppDispatch();

    const [name, setName] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    function captureLogin() {
        if (name && password) {
            const request: AdminAuthenticationRequest = {
                name: name,
                password: password
            }
            dispatch(adminLogin(request))
        }
    }

    return(
        <div className="App-header">
            <p>Admin Login</p>
            <input type="text" className="textbox login" placeholder="Admin" id="name" onChange={(e) => setName(e.target.value)}></input>
            <input type="text" className="textbox login" placeholder="Password" id="password" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={() => captureLogin()} className="button login">Login Admin</button>
        </div>
    )
}