import AuthContext from '../../context/AuthContext';
import diamond from "../../assets/diamond-white-AE.svg"
import { useContext, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { selectErrors, selectLoginStatus, userLogin } from '../user/userSlice';
import { Status } from '../../models/Status';
import { WappError } from '../../models/WappError';

export function Login() {

    const dispatch = useAppDispatch();

    const [family, setFamily] = useState<string>("");
    const [password, setPassword] = useState<string>("");
    const status: Status = useAppSelector(selectLoginStatus);
    const errors: WappError[] = useAppSelector(selectErrors);
    const { authenticateSession } = useContext(AuthContext);

    async function captureLogin() {

        if (family && password) {
            const request: AuthenticationRequest = {
                family: family,
                password: password
            }
            dispatch(userLogin(request))
            .then(async () => await authenticateSession());
        }
    }

    function handleKeyPress(e: React.KeyboardEvent<HTMLDivElement>) {
        if (e.key === 'Enter') {
            e.preventDefault();
            captureLogin();
        }
    }

    return(
        <div>
            <div>
            <img src={diamond} className="App-logo-login" alt="diamond"/>
            </div>
            <form onSubmit={() => captureLogin()} className='App-centered'>
                { status === 'failed' && (errors[0].type === "auth") && <label className='error-label'>{errors[0].message}</label> }
                <input
                    required
                    pattern='^[A-Za-z]*$'
                    type="text"
                    className={`textbox ${status}`}
                    placeholder="Username"
                    id="family" 
                    onChange={(e) => setFamily(e.target.value)}>
                </input>
                <input 
                    required
                    type="password"
                    className={`textbox ${status}`}
                    placeholder={"Secret"}
                    id="secret" onChange={(e) => setPassword(e.target.value)}
                    onKeyPress={(e) => handleKeyPress(e)}>
                </input>
            <button type='submit' className="button login">Login</button>
            </form>
        </div>
    )
}
