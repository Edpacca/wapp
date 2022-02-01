import { createContext, useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";

export type LoginContext = 'user' | 'admin' | 'none';

const AuthContext 
    = createContext<{ loginContext: LoginContext, 
        authenticateSession: (() => Promise<void>)}>
        ({ loginContext: 'none', authenticateSession: () => new Promise(r => r)});

function AuthContextProvider(props: any) {

    const [loginContext, setLoginContext] = useState<LoginContext>('none');
    const dispatch = useAppDispatch();

    async function authenticateSession() {
        const loggedIn = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/authenticate`, {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json());

        if (loggedIn) {
            switch (loggedIn.type) {
                case "user":
                    setLoginContext('user');
                    dispatch({ type: 'users/loginRefresh', payload: loggedIn });
                    break;
                case "admin":
                    setLoginContext('admin');
                    break;
                default:
                    setLoginContext('none');
                    break;
            }
        } else {
            setLoginContext('none');
        }
    }

    useEffect(() => {
        authenticateSession();
    }, []);
    
    return (
    <AuthContext.Provider value={{ loginContext, authenticateSession }}>
        {props.children}
    </AuthContext.Provider>
    )

}

export default AuthContext;
export {AuthContextProvider};
