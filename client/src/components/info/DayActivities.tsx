import { useState } from "react"
import { DAYS, Day, Activity } from "../../data/activityData"
import leftLeaf from "../../assets/icons/leaf-arrow-left.svg";
import rightLeaf from "../../assets/icons/leaf-arrow-right.svg";

export function DayActivities() {

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
                <img className="leaf-button l" src={leftLeaf} onClick={() => setActiveDay(((activeDay - 1) + 4) % 4)}/>
                <h1>{DAYS[activeDay].title}</h1>
                <img className="leaf-button r" src={rightLeaf} onClick={() => setActiveDay((activeDay + 1) % 4)}/>
            </div>
            <div className="days-wrapper">
                <div className="summary">
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
        <li key={activity.heading} style={{listStyleImage: `url(${activity.icon}`}} className="activity-list">
            <div>
                <span className="link">{title}</span>
                <div className="time">{activity.time}</div>
                <p>{activity.details}</p>
            </div>
        </li>
    )
}
