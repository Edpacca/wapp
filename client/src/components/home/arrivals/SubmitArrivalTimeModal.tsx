import { useState } from "react";
import { Family } from "../../../models/Family";
import { ARRIVAL_DAYS, DEPARTURE_DAYS } from "../../../data/arrivalDays";
import { ArrivalSelect } from "./ArrivalSelect";
import { Arrival } from "../../../models/Arrival";
import { useAppDispatch } from "../../../store/hooks";
import { submitUserArrivalTime } from "../../user/userSlice";

export function SubmitArrivalTimeModal(props: {family: Family, setIsVisible: (isVisible: boolean) => void}) {

    const dispatch = useAppDispatch();
    const [arrivalDay, setArrivalDay] = useState<string>("");
    const [arrivalTime, setArrivalTime] = useState<string>("");
    const [departureDay, setDepartureDay] = useState<string>("");
    const [departureTime, setDepartureTime] = useState<string>("");
    
    const arrivalString = arrivalDay === "" ? "Set arrival" : `Arriving on ${arrivalDay} ${arrivalTime}`;
    const departureString = departureDay === "" ? "Set departure" : `Departing on ${departureDay} ${departureTime}`;


    function handleSetArrivalDay(day: string) {
        setArrivalDay(day);
        if (day === "") setArrivalTime("");
    }

    function handleSetDepartureDay(day: string) {
        setDepartureDay(day);
        if (day === "") setDepartureTime("");
    }

    function submitArrivalTime() {

            const arrival: Arrival = {
                family: props.family.name,
                familyId: props.family.id,
                arrivalDay: arrivalDay,
                arrivalTime: arrivalTime,
                departureDay: departureDay,
                departureTime: departureTime
            }
            
            dispatch(submitUserArrivalTime(arrival))
            .then(() => props.setIsVisible(false));
    }   

    return(
        <div className="modalBox">
            <div className="arrival-modal">
                <p className="arrival-text">Let us know approximately when you plan to arrive and set off.</p>
                <p> don't worry we won't hold you to it! We just want an idea of when to expect folks</p>
                <h3>Arrival</h3>
                {
                    ARRIVAL_DAYS.map(arrival =>
                        <ArrivalSelect arrivalDay={arrival} isArrival={true} setDay={handleSetArrivalDay} setTime={setArrivalTime} isSelected={arrivalDay === arrival.day} selectedTime={arrivalTime}/> 
                    )
                }
                <div className="horizontal-bar"/>
                <h3>Departure</h3>
                {
                    DEPARTURE_DAYS.map(arrival =>
                        <ArrivalSelect arrivalDay={arrival} isArrival={false} setDay={handleSetDepartureDay} setTime={setDepartureTime} isSelected={departureDay === arrival.day} selectedTime={departureTime}/> 
                    )
                }
            </div>
            <div className="horizontal-bar"/>
            <div className="arrival-text">{arrivalString}</div>
            <div className="arrival-text">{departureString}</div>
            <div className="cancel-submit-buttons">
                <button className="modalButton" onClick={() => props.setIsVisible(false)}>Cancel</button>
                <button className="modalButton" onClick={() => submitArrivalTime()}>Submit</button>
            </div>
        </div>
    )
}
