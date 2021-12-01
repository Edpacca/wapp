import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { selectLoginStatus, userLogin } from './userSlice';

export function Login() {

    const dispatch = useAppDispatch();

    const [family, setFamily] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const status = useAppSelector(selectLoginStatus);

    function captureLogin() {
        if (family && password) {
            const request: AuthenticationRequest = {
                family: family,
                password: password
            }
            dispatch(userLogin(request))
        }
    }

    return(
        <div className="App-header">
            <p>Login Page</p>
            <input type="text" className={`textbox ${status}`} placeholder="Enter group name" id="family" onChange={(e) => setFamily(e.target.value)}></input>
            <input type="password" className={`textbox ${status}`} placeholder={status === 'failed' ? "Invalid Credentials" : "Secret"} id="secret" onChange={(e) => setPassword(e.target.value)}></input>
            <button onClick={() => captureLogin()} className="button login">Login</button>
        </div>
    )
}