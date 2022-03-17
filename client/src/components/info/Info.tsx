import { useState } from "react";
import { Arrival } from "../../models/Arrival";
import { Family } from "../../models/Family";
import { Seat } from "../../models/Seat";
import { useAppSelector } from "../../store/hooks";
import { selectUserFamily, selectUserArrivals, selectUserGuests, selectUserRooms, selectUserSeats } from "../user/userSlice";
import { ArrivalPlan } from "./arrivals/ArrivalPlan";
import BackButton from "../common/BackButton";
import { BigDay } from "./bigday/BigDay";
import { Itinerary } from "./itinerary/Itinerary";
import { Rooms } from "./rooms/Rooms";
import { SeatingPlan } from "./seating/SeatingPlan";
import { Room } from "../../models/Room";
import { Guest } from "../../models/Guest";

export type InfoTypes = 'none' | 'days' | 'scroll' | 'seating' | 'room' | 'arrivals';

export function Info(props: {languageIndex: 0 | 1}) {

    const [activeInfo, setActiveInfo] = useState<InfoTypes>('none');
    const guests: Guest[] = useAppSelector(selectUserGuests);
    const seats: Seat[] = useAppSelector(selectUserSeats);
    const arrivals: Arrival[] = useAppSelector(selectUserArrivals);
    const rooms: Room[] = useAppSelector(selectUserRooms);
    const family: Family = useAppSelector(selectUserFamily) as Family;

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
                {
                    <div className="info-header seating-header" onClick={() => setActiveInfo('seating')}>
                        <h1 className="info-h1">Seating Plan</h1>
                    </div>
                }

                {
                    rooms.length > 0 &&
                    <div className="info-header room-header" onClick={() => setActiveInfo('room')}>
                        <h1 className="info-h1">Room info</h1>
                    </div>
                }
                {
                    <div className="info-header arrivals-header" onClick={() => setActiveInfo('arrivals')}>
                        <h1 className="info-h1">Arrivals</h1>
                        <div className="bigday-sub">Find out when other people are arriving</div>
                    </div>
                }
                </>
            }
            {
                activeInfo !== 'none' &&
                <BackButton value={'none'} onClick={setActiveInfo}/>
            }
            {
                activeInfo === 'days' &&
                <Itinerary setActive={setActiveInfo} languageIndex={props.languageIndex}/>
            }
            {
                activeInfo === 'scroll' &&
                <BigDay languageIndex={props.languageIndex}/>
            }
            {
                activeInfo === 'seating' &&
                <SeatingPlan guestSeats={seats} />
            }
            {
                activeInfo === 'room' && 
                <Rooms rooms={rooms} activeGuestNames={guests.map(guest => guest.name)}/>
            }
            {
                activeInfo === 'arrivals' &&
                <ArrivalPlan arrivals={arrivals} family={family} languageIndex={props.languageIndex} />
            }
        </div>
    )
}
