import { useState } from "react";
import { Seat } from "../../models/Seat";
import { useAppSelector } from "../../store/hooks";
import { selectUserSeats } from "../user/userSlice";
import BackButton from "./BackButton";
import { BigDay } from "./bigday/BigDay";
import { Itinerary } from "./Itinerary";
import { SeatingPlan } from "./seating/SeatingPlan";

export type InfoTypes = 'none' | 'days' | 'scroll' | 'seating' | 'room';

export function Info() {

    const [activeInfo, setActiveInfo] = useState<InfoTypes>('none');
    const guestSeats: Seat[] = useAppSelector(selectUserSeats);

    return(
        <div>
            {
                activeInfo === 'none' &&
                <>
                <div className="info-header bigday-header" onClick={() => setActiveInfo('scroll')}>
                    <h1 className="info-h1">The Big Day</h1>
                    <div className="bigday-sub">An Interactive plan.</div>
                </div>
                <div className="info-header itinerary-header" onClick={() => setActiveInfo('days')}>
                        <h1 className="info-h1">Full Itinerary</h1>
                </div>
                <div className="info-header seating-header" onClick={() => setActiveInfo('seating')}>
                        <h1 className="info-h1">Seating Plan</h1>
                </div>
                <div className="info-header room-header" onClick={() => setActiveInfo('room')}>
                        <h1 className="info-h1">Room info</h1>
                </div>
                </>
            }
            {
                activeInfo !== 'none' &&
                <BackButton value={'none'} onClick={setActiveInfo}/>
            }
            {
                activeInfo === 'days' &&
                <Itinerary setActive={setActiveInfo}/>
            }
            {
                activeInfo === 'scroll' &&
                <BigDay />
            }
            {
                activeInfo === 'seating' &&
                <SeatingPlan guestSeats={guestSeats} />
            }
        </div>
    )
}
