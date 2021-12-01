import './admin.css';
import { useState } from "react";
import { selectIsAdmin } from "./adminSlice";
import { useSelector } from "react-redux";
import { AdminDashboard } from './AdminDashboard';
import { AdminLogin } from './AdminLogin';

export function AdminHome(props: {isAdmin: boolean }) {
    return(
    <div>
        {
            !props.isAdmin &&
            <AdminLogin/>
        }
        {
            props.isAdmin &&
            <AdminDashboard/>
        }
    </div>
    )
}