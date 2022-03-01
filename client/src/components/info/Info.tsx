import { useState } from "react";
import BackButton from "./BackButton";
import { BigDay } from "./BigDay";
import { DayActivities } from "./DayActivities";

export type InfoTypes = 'none' | 'days' | 'scroll' | 'seating';

export function Info() {

    const [activeInfo, setActiveInfo] = useState<InfoTypes>('none');

    return(
        <div>
            {
                activeInfo === 'none' &&
                <>
                <div className="info-header" onClick={() => setActiveInfo('scroll')}>
                    <h1 className="big-day">The Big Day</h1>
                    <div>An Interactive plan.</div>
                </div>
                <div className="info-header" onClick={() => setActiveInfo('days')}>
                        <h1 className="big-day">Full Itinerary</h1>
                </div>
                </>
            }
            {
                activeInfo !== 'none' &&
                <BackButton value={'none'} onClick={setActiveInfo}/>
            }
            {
                activeInfo === 'days' &&
                <DayActivities/>
            }
            {
                activeInfo === 'scroll' &&
                <BigDay />
            }
        </div>
    )
}
