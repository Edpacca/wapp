import { useState } from "react"
import { Days, Day, Activity } from "../../data/activityData"

export function DayActivities() {

    return (
        <div>
            {Days.map(day => RenderDay(day))}
        </div>
    )
}

function RenderDay(day: Day) {

    const activities = day.activities.map(activity => {
        return <li>{renderActivity(activity)}</li>
    })

    const [ showActivities, setShowActivities ] = useState<boolean>(false);

    return (
        <div className="day">
            <div>
                <h2 className="day-title" onClick={() => setShowActivities(!showActivities)}>{day.title}</h2>
            </div>
            <ul className="activities">
                {   
                    showActivities &&
                    activities
                }
            </ul>
            <br/>
        </div>
    )
}

function renderActivity(activity: Activity) {

    const title = activity.url 
    ? <a href={activity.url} className="link">{activity.name}</a> 
    : activity.name;

    return(
        <div>
            <h3 className="link">{title}</h3>
            <p>{activity.details}</p>
            <br/>
        </div>
    )
}