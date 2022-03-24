import { TabLink } from "./TabLink";
import { UserPage } from "../../models/ActivePage";
import { useAppDispatch } from "../../store/hooks";
import { changePageUser } from './NavigationSlice'

export function NavBar(props: {page: UserPage, languageIndex: 1 | 0}) {

    const dispatch = useAppDispatch();
    const textHome = ["Home", "Dom"];
    const textMeal = ["Meal", "Posiłek"];
    const textMap = ["Map", "Mapa"];

    return(
        <div className="tabLinks">
                <TabLink 
                isActive={props.page === 'home'}
                title={textHome[props.languageIndex]}
                onClick={() => dispatch(changePageUser('home'))} /> 

                <TabLink 
                isActive={props.page === 'info'}
                title="Info" 
                onClick={() => dispatch(changePageUser('info'))} /> 

                <TabLink 
                isActive={props.page === 'meal'}
                title={textMeal[props.languageIndex]} 
                onClick={() => dispatch(changePageUser('meal'))} /> 

                <TabLink 
                isActive={props.page === 'map'}
                title={textMap[props.languageIndex]}
                onClick={() => dispatch(changePageUser('map'))} /> 
        </div>
    )
}
