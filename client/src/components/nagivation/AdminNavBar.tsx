import { TabLink } from "./TabLink";
import './navigation.css'
import { useAppDispatch } from "../../app/hooks";
import { changePageAdmin } from './NavigationSlice'
import { AdminPage } from "../../models/AdminPage";

export function AdminNavBar(props: {page: AdminPage}) {

    const dispatch = useAppDispatch();

    return(
        <div className="tabLinks">
            { 
                <TabLink 
                isActive={props.page === 'home'}
                title="Home" 
                onClick={() => dispatch(changePageAdmin('home'))} /> 
            }
            { 
                <TabLink 
                isActive={props.page === 'create'}
                title="Create" 
                onClick={() => dispatch(changePageAdmin('create'))} /> 
            }
            { 
                <TabLink 
                isActive={props.page === 'edit'}
                title="Edit" 
                onClick={() => dispatch(changePageAdmin('edit'))} /> 
            }
        </div>
    )
}
