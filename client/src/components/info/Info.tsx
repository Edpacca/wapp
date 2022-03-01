import { useState } from "react";
import BackButton from "./BackButton";
import { BigDay } from "./BigDay";
import { DayActivities } from "./DayActivities";

export type InfoTypes = 'none' | 'days' | 'scroll' | 'seating' | 'room';

export function Info() {

    const [activeInfo, setActiveInfo] = useState<InfoTypes>('none');

    return(
        <div>
            {
                activeInfo === 'none' &&
                <>
                <div className="info-header bd-header" onClick={() => setActiveInfo('scroll')}>
                    <h1 className="big-day">The Big Day</h1>
                    {/* <img className="flowers" src={flowers} alt={""}/> */}
                    <div>An Interactive plan.</div>
                </div>
                <div className="info-header" onClick={() => setActiveInfo('days')}>
                        <h1 className="big-day">Full Itinerary</h1>
                </div>
                <div className="info-header" onClick={() => setActiveInfo('seating')}>
                        <h1 className="big-day">Seating Plan</h1>
                </div>
                <div className="info-header" onClick={() => setActiveInfo('room')}>
                        <h1 className="big-day">Room info</h1>
                </div>
                </>
            }
            {
                activeInfo !== 'none' &&
                <BackButton value={'none'} onClick={setActiveInfo}/>
            }
            {
                activeInfo === 'days' &&
                <DayActivities setActive={setActiveInfo}/>
            }
            {
                activeInfo === 'scroll' &&
                <BigDay />
            }
        </div>
    )
}
