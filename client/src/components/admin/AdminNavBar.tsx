import { TabLink } from "../nagivation/TabLink";
import { useAppDispatch } from "../../store/hooks";
import { changePageAdmin } from '../nagivation/NavigationSlice'
import { AdminPage } from "../../models/AdminPage";

export function AdminNavBar(props: {page: AdminPage}) {

    const dispatch = useAppDispatch();

    return(
        <div className="tabLinks">
            { 
                <TabLink 
                isActive={props.page === 'summary'}
                title="Summary" 
                onClick={() => dispatch(changePageAdmin('summary'))} /> 
            }
            { 
                <TabLink 
                isActive={props.page === 'arrivals'}
                title="Arrivals" 
                onClick={() => dispatch(changePageAdmin('arrivals'))} /> 
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
