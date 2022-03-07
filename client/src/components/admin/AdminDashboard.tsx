import AuthContext from '../../context/AuthContext';
import { useAppDispatch, useAppSelector } from "../../store/hooks";
import { useContext } from "react";
import { adminLogout, getArrivals, getGuests, selectAdminArrivals, selectGuests } from "./adminSlice";
import { useNavigate } from 'react-router-dom';
import { AdminEdit } from './AdminEdit/AdminEdit';
import { AdminNavBar } from './AdminNavBar';
import { AdminPage } from '../../models/AdminPage';
import { selectPageAdmin } from '../nagivation/NavigationSlice';
import { AdminMeals } from './AdminMeals/AdminMeals';
import { Guest } from '../../models/Guest';
import { AdminCreate } from './AdminCreate/AdminCreate';
import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { faDoorOpen } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { AdminArrivals } from './AdminArrivals/AdminArrivals';
import { Arrival } from '../../models/Arrival';

export function AdminDashboard() {
    const dispatch = useAppDispatch();
    const { setLoginContext } = useContext(AuthContext);
    const navigate = useNavigate();
    const page: AdminPage = useAppSelector(selectPageAdmin);
    const guests: Guest[] = useAppSelector(selectGuests);
    const arrivals: Arrival[] = useAppSelector(selectAdminArrivals)
   
    function logout() {
        dispatch(adminLogout()).then(() => navigate("/"));
        setLoginContext(undefined);
    }

    return(
        <div className="App-header">
            <AdminNavBar page={page}/>
                { page === 'meals' && <AdminMeals guests={guests}/> }
                { page === 'arrivals' && <AdminArrivals arrivals={arrivals}/> }
                { page === 'create' && <AdminCreate/> }
                { page === 'edit' && <AdminEdit guests={guests}/> }
            <div>
                <button onClick={() => dispatch(getGuests())} className="button">Get Guests &nbsp; <FontAwesomeIcon icon={faDownload}/></button>
                <button onClick={() => dispatch(getArrivals())} className="button">Get Arrivals &nbsp; <FontAwesomeIcon icon={faDownload}/></button>
                <button onClick={() => logout()} className="button"> Logout &nbsp; <FontAwesomeIcon icon={faDoorOpen}/></button>
            </div>
        </div>)
}


