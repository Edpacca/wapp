import { useState } from "react";
import { Activity } from "../../../data/activityData";


const TimelineInfo = (props: {activity: Activity, languageIndex: 0 | 1}) => {

    const [showDetails, setShowDetails] = useState<boolean>(false);

    return (
        <div className="timeline-text" onClick={() => setShowDetails(!showDetails)}>
            <div className="head" >{props.activity.heading[props.languageIndex]}</div>
            <div className="sub">{props.activity.location[props.languageIndex]}</div>
            <div className="sub">{props.activity.time[props.languageIndex]}</div>
            {
                props.activity.subheading &&
               <div className="sub2">{props.activity.subheading[props.languageIndex]}</div>
            }
            {
                props.activity.details && showDetails && 
                <div className="details">{props.activity.details[props.languageIndex]}</div>
            }
        </div>
    )
}

export default TimelineInfo;