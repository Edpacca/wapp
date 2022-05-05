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
import { GeneralInfo } from "./general/GeneralInfo";
import { InfoPage } from "../../models/InfoType";
import { selectPageInfo, changePageInfo } from "../nagivation/NavigationSlice";
import { useAppDispatch } from "../../store/hooks";

export function Info(props: {languageIndex: 0 | 1}) {

    const dispatch = useAppDispatch();
    const activeInfo = useAppSelector(selectPageInfo);
    const guests: Guest[] = useAppSelector(selectUserGuests);
    const seats: Seat[] = useAppSelector(selectUserSeats);
    const arrivals: Arrival[] = useAppSelector(selectUserArrivals);
    const rooms: Room[] = useAppSelector(selectUserRooms);
    const family: Family = useAppSelector(selectUserFamily) as Family;

    function setActiveInfo(infoPage: InfoPage) {
        dispatch(changePageInfo(infoPage));
    }

    const textGeneralInfo = ["General Info", "Ogólne Info"];
    const textBigDay = ["The Big Day", "Nasz wielki dzień"];
    const textArrivals = ["Arrivals", "Przyjazdy"];
    const textFullItinerary = ["Full Itinerary", "Pełny plan weekendu"];
    const textSeatingPlan = ["Seating Plan", "Plan Miejsc"];
    const textRoomInfo = ["Room Info", "Info o Pokojach"];

    return(
        <div>
            {
                activeInfo === 'none' &&
                <>
                <div className="info-header general-header" onClick={() => setActiveInfo('general')}>
                    <div className="info-h1">{textGeneralInfo[props.languageIndex]}</div>
                </div>
                <div className="info-header bigday-header" onClick={() => setActiveInfo('bigday')}>
                    <div className="info-h1">{textBigDay[props.languageIndex]}</div>
                </div>
                <div className="info-header itinerary-header" onClick={() => setActiveInfo('itinerary')}>
                        <div className="info-h1">{textFullItinerary[props.languageIndex]}</div>
                </div>
                {
                    <div className="info-header seating-header" onClick={() => setActiveInfo('seating')}>
                        <div className="info-h1">{textSeatingPlan[props.languageIndex]}</div>
                    </div>
                }

                {
                    rooms.length > 0 &&
                    <div className="info-header room-header" onClick={() => setActiveInfo('room')}>
                        <div className="info-h1">{textRoomInfo[props.languageIndex]}</div>
                    </div>
                }
                {
                    <div className="info-header arrivals-header" onClick={() => setActiveInfo('arrivals')}>
                        <div className="info-h1">{textArrivals[props.languageIndex]}</div>
                    </div>
                }
                </>
            }
            {
                activeInfo !== 'none' &&
                <BackButton value={'none'} onClick={setActiveInfo}/>
            }
            {
                activeInfo === 'general' &&
                <GeneralInfo languageIndex={props.languageIndex}/>
            }
            {
                activeInfo === 'itinerary' &&
                <Itinerary setActive={setActiveInfo} languageIndex={props.languageIndex}/>
            }
            {
                activeInfo === 'bigday' &&
                <BigDay languageIndex={props.languageIndex}/>
            }
            {
                activeInfo === 'seating' &&
                <SeatingPlan guestSeats={seats} activeGuestSeatNumbers={guests.filter(guest => guest.seat !== undefined).map(guest => guest.seat as number)}/>
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
