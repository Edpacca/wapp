import { DayActivities } from "./DayActivities";
import './info.css'
import { ScrollAnimation } from "./ScrollAnimation";
import leaf from '../../assets/leaf-solid.svg';

export function Itinerary() {

    return(
        <div className="itinerary">
            {/* <DayActivities/> */}
            <ScrollAnimation imageUrl={leaf}/>
        </div>
    )
}
