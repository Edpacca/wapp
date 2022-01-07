import { createContext, useEffect, useState } from "react";
import { useAppDispatch } from "../app/hooks";
import { getGuestsUser } from "../components/food/foodSlice";

export type LoginContext = 'user' | 'admin' | 'none';

const AuthContext 
    = createContext<{ loginContext: LoginContext, 
        getUserLoggedIn: (() => Promise<void>), 
        getAdminLoggedIn: (() => Promise<void>) }>
        ({ loginContext: 'none', getUserLoggedIn: () => new Promise(r => r), getAdminLoggedIn: () =>  new Promise(r => r)});

function AuthContextProvider(props: any) {

    const [loginContext, setLoginContext] = useState<LoginContext>('none');

    const dispatch = useAppDispatch();

    async function getUserLoggedIn() {
        const loggedIn = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/guest/loggedIn`, {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json());
        if (loggedIn) {
            setLoginContext('user');
            dispatch(getGuestsUser({family: loggedIn.family}));
        } 
        
        else getAdminLoggedIn();
    }

    async function getAdminLoggedIn() {
        const loggedIn = await fetch(`${process.env.REACT_APP_EXPRESS_SERVER}/admin/loggedIn`, {
            credentials: 'include',
            method: 'GET',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
            }
        }).then(response => response.json());
        if (loggedIn) setLoginContext('admin') 
        else setLoginContext('none');
    }

    useEffect(() => {
        getUserLoggedIn();
    }, []);
    
    return (
    <AuthContext.Provider value={{ loginContext, getUserLoggedIn, getAdminLoggedIn }}>
        {props.children}
    </AuthContext.Provider>
    )

}

export default AuthContext;
export {AuthContextProvider};