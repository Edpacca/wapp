import { TabLink } from "./TabLink";
import '../../styles/navigation.css';
import { UserPage } from "../../models/ActivePage";
import { useAppDispatch } from "../../app/hooks";
import {
    changePageUser
} from './NavigationSlice'

export function NavBar(props: {page: UserPage}) {

    const dispatch = useAppDispatch();

    return(
        <div className="tabLinks">
                <TabLink 
                isActive={props.page === 'home'}
                title="Home" 
                onClick={() => dispatch(changePageUser('home'))} /> 

                <TabLink 
                isActive={props.page === 'info'}
                title="Info" 
                onClick={() => dispatch(changePageUser('info'))} /> 

                <TabLink 
                isActive={props.page === 'meal'}
                title="Meal" 
                onClick={() => dispatch(changePageUser('meal'))} /> 

                <TabLink 
                isActive={props.page === 'location'}
                title="Location" 
                onClick={() => dispatch(changePageUser('location'))} /> 
        </div>
    )
}
