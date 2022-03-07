import AuthContext from '../../context/AuthContext';
import diamond from "../../assets/logos/diamond-white-AE.svg"
import { useContext, useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { AuthenticationRequest } from '../../models/AuthenticationRequest';
import { selectErrors, selectLoginStatus, userLogin } from '../user/userSlice';
import { WappError } from '../../models/WappError';

export function Login() {

    const dispatch = useAppDispatch();
    const status = useAppSelector(selectLoginStatus);
    const { authenticateSession } = useContext(AuthContext);
    const errors: WappError[] = useAppSelector(selectErrors);

    const [family, setFamily] = useState<string>("");
    const [password, setPassword] = useState<string>("");

    async function captureLogin() {

        if (family && password) {
            const request: AuthenticationRequest = {
                family: family,
                password: password
            }
            dispatch(userLogin(request))
            .then(() => authenticateSession());
        }
    }

    const onKeyDown = (event: React.KeyboardEvent<HTMLDivElement>): void => {
        if (event.key === 'Enter') {
          event.preventDefault();
          event.stopPropagation();
          captureLogin();
        }
    }

    const captureTextInput = (value: string, setValue: (value: string) => void): void => {
        if (value.length === 0) dispatch({ type: 'users/loginResetStatus' });
        setValue(value);
    }

    return(
        <div>
            <div>
            <img src={diamond} className="App-logo-login" alt="diamond"/>
            </div>
            <div className='App-centered'>
                { status === 'failed' && (errors[0].type === "auth") && <label className='error-label'>{errors[0].message}</label> }
                <input
                    required
                    pattern='^[A-Za-z]*$'
                    type="text"
                    className={`textbox ${status}`}
                    placeholder="Username"
                    id="family" 
                    onChange={(e) => captureTextInput(e.target.value, setFamily)}
                    onKeyDown={onKeyDown}>
                </input>
                <input 
                    required
                    type="password"
                    className={`textbox ${status}`}
                    placeholder={"Secret"}
                    id="secret" 
                    onChange={(e) => captureTextInput(e.target.value, setPassword)}
                    onKeyDown={onKeyDown}
                    >
                </input>
            <button onClick={() => captureLogin()} className="button login">Login</button>
            </div>
        </div>
    )
}
