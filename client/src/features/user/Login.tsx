import { useAppDispatch } from '../../app/hooks';

export function Login() {

    const dispatch = useAppDispatch();

    return(
        <div className="App-header">
            <p>Login Page</p>
            <input type="text" className="textbox login" placeholder="Enter group name"></input>
            <input type="text" className="textbox login" placeholder="Passcode"></input>
            <button onClick={() => dispatch({type: 'users/login'})} className="button login">Login</button>
        </div>
    )
}