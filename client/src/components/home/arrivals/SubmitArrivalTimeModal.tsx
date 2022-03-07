import { useState } from "react";
import { Family } from "../../../models/Family";
import { ARRIVAL_DAYS } from "../../../data/arrivalDays";
import { ArrivalSelect } from "./ArrivalSelect";
import { Arrival } from "../../../models/Arrival";
import { useAppDispatch } from "../../../store/hooks";
import { submitUserArrivalTime } from "../../user/userSlice";

export function SubmitArrivalTimeModal(props: {family: Family, setIsVisible: (isVisible: boolean) => void}) {

    const dispatch = useAppDispatch();
    const [day, setDay] = useState<string>("");
    const [time, setTime] = useState<string>("");

    function submitArrivalTime() {
        if (day !== "" && time !== "") {
            const arrival: Arrival = {
                family: props.family.name,
                familyId: props.family.id,
                day: day,
                time: time,
            }
            
            dispatch(submitUserArrivalTime(arrival))
            .then(() => props.setIsVisible(false));
        }
    }   

    return(
        <div className="modalBox">
            <div>
                <p className="arrival-text">Let us know approximately when you plan to arrive</p>
                <p> don't worry we won't hold you to it! We just want an idea of when to expect folks</p>
                {
                    ARRIVAL_DAYS.map(arrival =>
                        <ArrivalSelect arrivalDay={arrival} setDay={setDay} setTime={setTime} isSelected={day === arrival.day} selectedTime={time}/> 
                    )
                }
            </div>
            <div className="horizontal-bar"/>
            <div className="arrival-text">{`Arriving on ${day} ${time}`}</div>
            <div className="cancel-submit-buttons">
                <button className="modalButton" onClick={() => props.setIsVisible(false)}>Cancel</button>
                <button className="modalButton" onClick={() => submitArrivalTime()}>Submit</button>
            </div>
        </div>
    )
}
