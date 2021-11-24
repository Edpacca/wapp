import { useState } from 'react';
import { useAppDispatch } from '../../app/hooks';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { userLogin } from './userSlice';

export function Login() {

    const dispatch = useAppDispatch();

    const [family, setFamily] = useState<string>("");
    const [passcode, setPasscode] = useState<string>("");

    function captureLogin() {
        if (family && passcode) {
            const request: AuthenticationRequest = {
                family: family
            }
            dispatch(userLogin(request))
        }
    }

    return(
        <div className="App-header">
            <p>Login Page</p>
            <input type="text" className="textbox login" placeholder="Enter group name" id="family" onChange={(e) => setFamily(e.target.value)}></input>
            <input type="text" className="textbox login" placeholder="Passcode" id="passcode" onChange={(e) => setPasscode(e.target.value)}></input>
            <button onClick={() => captureLogin()} className="button login">Login</button>
        </div>
    )
}