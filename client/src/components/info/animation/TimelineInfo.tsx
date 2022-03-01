import { useState } from "react";
import { Activity } from "../../../data/activityData";


const TimelineInfo = (props: {activity: Activity}) => {

    const [showDetails, setShowDetails] = useState<boolean>(false);

    return (
        <div className="timeline-text" onClick={() => setShowDetails(!showDetails)}>
            <div className="head" >{props.activity.heading}</div>
            <div className="sub">{props.activity.location}</div>
            <div className="sub">{props.activity.time}</div>
            {
                props.activity.subheading &&
               <div className="sub2">{props.activity.subheading}</div>
            }
            {
                props.activity.details && showDetails && 
                <div className="details">{props.activity.details}</div>
            }
        </div>
    )
}

export default TimelineInfo;