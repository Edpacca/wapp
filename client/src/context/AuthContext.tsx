import { createContext, useEffect, useState } from "react";
import { useAppDispatch } from "../store/hooks";

export type LoginContext = 'user' | 'admin' | undefined;

const AuthContext 
    = createContext<{ loginContext: LoginContext, setLoginContext: (context: LoginContext) => void,
        authenticateSession: (() => Promise<void>)}>
        ({ loginContext: undefined, setLoginContext: (() => {}), authenticateSession: () => new Promise(r => r)});

function AuthContextProvider(props: any) {

    const [loginContext, setLoginContext] = useState<LoginContext>(undefined);
    const dispatch = useAppDispatch();

    async function authenticateSession() {
        try {
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
        } catch (error) {
            console.log("Failed to connect to server");
        }
    }

    useEffect(() => {
            if (loginContext === undefined) {
                authenticateSession();
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
