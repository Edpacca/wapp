import { DayActivities } from "./DayActivities";
import { ScrollAnimation } from "./ScrollAnimation";
import leaf from '../../assets/leaf-solid.svg';

export function Itinerary() {

    return(
        <div className="itinerary">
            <div className="scroll-img-outer">
              <ScrollAnimation imageUrl={leaf} startingPos={{ x: -20, y: 20 }} id={"leaf_1"} hFactor={0.2} vFactor={0.3}/>
            </div>
            <div className="scroll-img-outer">
              <ScrollAnimation imageUrl={leaf} startingPos={{ x: -20, y: 320 }} id={"leaf_2"} hFactor={0.4} vFactor={0.2}/>
            </div>
            {/* <DayActivities/> */}
        </div>
    )
}
