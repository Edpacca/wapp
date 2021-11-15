import { TabLink } from "./TabLink";
import './navigation.css'
import { ActivePage } from "../../models/ActivePage";
import { useAppDispatch } from "../../app/hooks";
import {
    changePage
} from './NavigationSlice'

export function NavBar(props: {page: ActivePage}) {

    const dispatch = useAppDispatch();

    return(
        <div className="tabLinks">
            { 
                props.page !== 'home' && 
                <TabLink 
                    title="Home" 
                    onClick={() => dispatch(changePage('home'))} /> 
            }
            { 
                props.page !== 'itinerary' && 
                <TabLink 
                    title="Itinerary" 
                    onClick={() => dispatch(changePage('itinerary'))} /> 
            }
            { 
                props.page !== 'meal' && 
                <TabLink 
                    title="Meal" 
                    onClick={() => dispatch(changePage('meal'))} /> 
            }
            { 
                props.page !== 'location' && 
                <TabLink 
                    title="Location" 
                    onClick={() => dispatch(changePage('location'))} /> 
            }
            { 
                props.page !== 'info' && 
                <TabLink 
                    title="Info" 
                    onClick={() => dispatch(changePage('info'))} /> 
            }
        </div>
    )
}