import AuthContext from '../../context/AuthContext';
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { useContext } from "react";
import { adminLogout, getGuests, selectGuests } from "./adminSlice";
import { useNavigate } from 'react-router-dom';
import { CreateUser } from './CreateUser';
import { EditUsers } from './EditUsers';
import { AdminNavBar } from '../nagivation/AdminNavBar';
import { AdminPage } from '../../models/AdminPage';
import { selectPageAdmin } from '../nagivation/NavigationSlice';
import { AdminHome } from './AdminHome';
import { Guest } from '../../models/Guest';


export function AdminDashboard() {

    const dispatch = useAppDispatch();
    const { setLoginContext } = useContext(AuthContext);
    const navigate = useNavigate();
    const page: AdminPage = useAppSelector(selectPageAdmin);
    const guests: Guest[] = useAppSelector(selectGuests);
   
    function logout() {
        dispatch(adminLogout()).then(() => navigate("/"));
        setLoginContext(undefined);
    }

    return(
        <div className="App-header">
            <button onClick={() => logout()} className="button">Logout</button>
            <button onClick={() => dispatch(getGuests())} className="button">Get Guests </button>
            <p>Admin Page</p>
            <AdminNavBar page={page}/>
                { page === 'home' && <AdminHome guests={guests}/> }
                { page === 'create' && <CreateUser/> }
                { page === 'edit' && <EditUsers guests={guests}/> }
        </div>)
}


