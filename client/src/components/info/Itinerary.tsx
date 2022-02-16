import { DayActivities } from "./DayActivities";
import './info.css'
import { ScrollAnimation } from "./ScrollAnimation";
import leaf from '../../assets/leaf-solid.svg';

export function Itinerary() {

    return(
        <div className="itinerary">
            <ScrollAnimation imageUrl={leaf} id={"leaf_1"} hFactor={1} vFactor={1.5}/>
            {/* <DayActivities/> */}
        </div>
    )
}
