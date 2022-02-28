import { useState } from "react"
import { DAYS, Day, Activity } from "../../data/activityData"

export function DayActivities() {

    const [activeDay, setActiveDay] = useState<number | undefined>(undefined);

    return (
        <div className="days-wrapper">
            <div className="days">
                {DAYS.map((day, index) => RenderDay(day, index, activeDay === index, setActiveDay))}
            </div>
            { 
                activeDay != undefined &&
                <div className="activities">
                    {
                        DAYS[activeDay].activities.map(activity => {
                            return renderActivity(activity)
                        })
                    }
                </div>    
            }
        </div>

    )
}

function RenderDay(day: Day, index: number, isActive: Boolean, setActive: (index: number | undefined) => void) {

    return (
        <div className="day" onClick={() => isActive ? setActive(undefined) : setActive(index)}>
            <div className={`calendar${isActive ? " active" : ""}`}>
                <div className="date">{day.date.getDate()}<sup>th</sup></div>
                <div className="day-title">{day.title}</div>
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
                <span className="link">{title}</span>
                <p>{activity.details}</p>
        </li>
    )
}
