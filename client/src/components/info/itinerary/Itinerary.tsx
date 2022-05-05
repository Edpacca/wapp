import { useState } from "react"
import { DAYS, Activity } from "../../../data/activityData";
import leftLeaf from "../../../assets/icons/leaf-arrow-left.svg";
import rightLeaf from "../../../assets/icons/leaf-arrow-right.svg";
import { InfoPage } from "../../../models/InfoType";

export function Itinerary(props: {setActive: (value: InfoPage) => void, languageIndex: 1 | 0}) {

    const today = new Date();
    const event = new Date(2022, 7, 15);
    let initialDay = 0;
    if (today.getTime() > event.getTime()) {
        initialDay = (event.getDay() + 3) % 7
    }

    const [activeDay, setActiveDay] = useState<number>(initialDay);
    const scrollToTop = () => {window.scrollTo(0, 0)}

    return (
        <div>
            <div>
                <div className="lr-selector">
                    <img className="leaf-button l" src={leftLeaf} onClick={() => setActiveDay(((activeDay - 1) + 4) % 4)} alt={""}/>
                    <div><h1>{DAYS[activeDay].title[props.languageIndex]}</h1></div>
                    <img className="leaf-button r" src={rightLeaf} onClick={() => setActiveDay((activeDay + 1) % 4)} alt={""}/>
                </div>
            </div>
            <div className="days-wrapper">
                <div className="summary">
                    {
                        activeDay === 1 &&
                        <div>
                            <button onClick={() => props.setActive('bigday')}>Interactive Timeline</button>
                        </div>
                    }
                    {DAYS[activeDay].summary[props.languageIndex]}
                </div>
                
                <div className="activities">
                    {
                        DAYS[activeDay].activities.map(activity => {
                            return renderActivity(activity, props.languageIndex)
                        })
                    }
                </div>    
            </div>
            <div className="selector-wrapper">
                <div className="lr-selector">
                    <img className="leaf-button l" src={leftLeaf} onClick={() =>{ setActiveDay(((activeDay - 1) + 4) % 4); scrollToTop(); }} alt={""}/>
                    <div><h1>{DAYS[activeDay].title[props.languageIndex]}</h1></div>
                    <img className="leaf-button r" src={rightLeaf} onClick={() =>{ setActiveDay((activeDay + 1) % 4); scrollToTop(); }} alt={""}/>
                </div>
            </div>
        </div>
    )
}

function renderActivity(activity: Activity, languageIndex: 1 | 0) {

    const location = activity.url 
    ? <a href={activity.url} className="link">{activity.location[languageIndex]}</a> 
    : activity.location[languageIndex];

    return(
        <li key={activity.heading[0]} className="activity-list">
            <div>
                <img src={activity.icon} alt={activity.heading[0]} className="activity-icon"/>
                <div className="title">{activity.heading[languageIndex]}</div>
                <div className="time">{activity.time[languageIndex]}</div>
                <div className="time">{location}</div>
                {
                    activity.details &&
                   <p>{parseDetails(activity.details[languageIndex])}</p>
                }
                {
                    activity.extraJSX &&
                    activity.extraJSX()
                }
            </div>
        </li>
    )
}

function parseDetails(details: String): JSX.Element {
    const detailsList = details.split("%");
    return(
        <>
        {
            detailsList.map(detail => {
                return <p>{detail}</p>
            })
        }
        </>
    ) 
    
}