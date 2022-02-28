import { createContext, useEffect, useState } from "react";
import { selectFamilyName, selectIsLoggedIn } from "../components/user/userSlice";
import { useAppDispatch, useAppSelector } from "../store/hooks";

export type LoginContext = 'user' | 'admin' | undefined;

const AuthContext 
    = createContext<{ loginContext: LoginContext, setLoginContext: (context: LoginContext) => void,
        authenticateSession: (() => Promise<void>)}>
        ({ loginContext: undefined, setLoginContext: (() => {}), authenticateSession: () => new Promise(r => r)});

function AuthContextProvider(props: any) {

    const [loginContext, setLoginContext] = useState<LoginContext>(undefined);
    const dispatch = useAppDispatch();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    async function authenticateSession() {
        const loggedIn = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/authenticate`, {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'x-access-token' : `${process.env.REACT_APP_CLIENT_TOKEN}`
            }
        }).then(response => response.json());

        setLoginContext(loggedIn.type);

        if (loggedIn.type === 'user') {
            dispatch({ type: 'users/loginRefresh', payload: loggedIn.data });
        }
    }

    useEffect(() => {
            if (!isLoggedIn) {
                authenticateSession();
                setIsLoggedIn(true);
            }
    }, []);
    
    return (
    <AuthContext.Provider value={{ loginContext, setLoginContext, authenticateSession }}>
        {props.children}
    </AuthContext.Provider>
    )

}

export default AuthContext;
export {AuthContextProvider};
