import { useState } from "react"
import { DAYS, Activity } from "../../../data/activityData";
import leftLeaf from "../../../assets/icons/leaf-arrow-left.svg";
import rightLeaf from "../../../assets/icons/leaf-arrow-right.svg";
import { InfoTypes } from "../Info";

export function Itinerary(props: {setActive: (value: InfoTypes) => void}) {

    const today = new Date();
    const event = new Date(2022, 7, 15);
    let initialDay = 0;
    if (today.getTime() > event.getTime()) {
        initialDay = (event.getDay() + 3) % 7
    }

    const [activeDay, setActiveDay] = useState<number>(initialDay);

    return (
        <div>
            <div className="lr-selector">
                <img className="leaf-button l" src={leftLeaf} onClick={() => setActiveDay(((activeDay - 1) + 4) % 4)} alt={""}/>
                <div><h1>{DAYS[activeDay].title}</h1></div>
                <img className="leaf-button r" src={rightLeaf} onClick={() => setActiveDay((activeDay + 1) % 4)} alt={""}/>
            </div>
            <div className="days-wrapper">
                <div className="summary">
                    {
                        activeDay === 1 &&
                        <div>
                            <button onClick={() => props.setActive('scroll')}>Interactive Timeline</button>
                        </div>
                    }
                    {DAYS[activeDay].summary}
                </div>
                
                <div className="activities">
                    {
                        DAYS[activeDay].activities.map(activity => {
                            return renderActivity(activity)
                        })
                    }
                </div>    
            </div>
        </div>
    )
}

function renderActivity(activity: Activity) {

    const title = activity.url 
    ? <a href={activity.url} className="link">{activity.heading}</a> 
    : activity.heading;

    return(
        <li key={activity.heading} className="activity-list">
            <div>
                <img src={activity.icon} alt={activity.heading} className="activity-icon"/>
                <div className="link">{title}</div>
                <div className="time">{activity.time}</div>
                <p>{activity.details}</p>
            </div>
        </li>
    )
}