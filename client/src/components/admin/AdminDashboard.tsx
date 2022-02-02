import styles from './admin.module.css';
import AuthContext from '../../context/AuthContext';
import { useAppDispatch } from "../../app/hooks";
import { useContext } from "react";
import { adminLogout } from "./adminSlice";
import { useNavigate } from 'react-router-dom';
import { CreateUser } from './CreateUser';
import { EditUsers } from './EditUsers';
import { useState } from 'react';


export function AdminDashboard() {

    const dispatch = useAppDispatch();
    const { setLoginContext } = useContext(AuthContext);
    const [create, setCreate] = useState(false);
    const [edit, setEdit] = useState(false);
    const navigate = useNavigate();

   
    function logout() {
        dispatch(adminLogout()).then(() => navigate("/"));
        setLoginContext(undefined);
    }

    return(
        <div className="App-header">
            <button onClick={() => logout()} className="button">Logout</button>
            <p>Admin Page</p>
            <div className={styles.outline}>            
                <button onClick={() => setCreate(!create)} className="button">Create User</button>
                { create && <CreateUser/> }
            </div>
                <button onClick={() => setEdit(!edit)} className="button">Edit Users</button>
                { edit && <EditUsers/> }
        </div>)
    }
