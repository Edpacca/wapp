import { useState } from "react"
import { DAYS, Day, Activity } from "../../data/activityData"

export function DayActivities() {

    const [activeDay, setActiveDay] = useState(5);

    return (
        <div className="days">
            {DAYS.map((day, index) => RenderDay(day, index, activeDay === index, setActiveDay))}
        </div>
    )
}

function RenderDay(day: Day, index: number, isActive: Boolean, setActive: (index: number) => void) {

    const activities = day.activities.map(activity => {
        return <li key={activity.heading}>{renderActivity(activity)}</li>
    })

    return (
        <div className="day" onClick={() => isActive ? setActive(5) : setActive(index)}>
            <div className="calendar">
                <div className="date">{day.date.getDate()}<sup>th</sup></div>
                <div className="day-title">{day.title}</div>
            </div>
            <ul className="activities">
                {   
                    isActive &&
                    activities
                }
            </ul>
            <br/>
        </div>
    )
}

function renderActivity(activity: Activity) {

    const title = activity.url 
    ? <a href={activity.url} className="link">{activity.heading}</a> 
    : activity.heading;

    return(
        <div>
            <h3 className="link">{title}</h3>
            <p>{activity.details}</p>
            <br/>
        </div>
    )
}