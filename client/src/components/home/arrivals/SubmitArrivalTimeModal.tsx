import { useState } from "react";
import { Family } from "../../../models/Family";
import { ARRIVAL_DAYS, DEPARTURE_DAYS } from "../../../data/arrivalDays";
import { ArrivalSelect } from "./ArrivalSelect";
import { Arrival } from "../../../models/Arrival";
import { useAppDispatch } from "../../../store/hooks";
import { submitUserArrivalTime } from "../../user/userSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export function SubmitArrivalTimeModal(props: {family: Family, setIsVisible: (isVisible: boolean) => void, languageIndex: 0 | 1}) {

    const dispatch = useAppDispatch();
    const [arrivalDay, setArrivalDay] = useState<string[]>([""]);
    const [arrivalTime, setArrivalTime] = useState<string[]>([""]);
    const [departureDay, setDepartureDay] = useState<string[]>([""]);
    const [departureTime, setDepartureTime] = useState<string[]>([""]);
    const [isError, setIsError] = useState(false);

    const arrivalString = arrivalDay[0] === "" ? "Set arrival" : `Arriving on ${arrivalDay[props.languageIndex]} ${arrivalTime[props.languageIndex]}`;
    const departureString = departureDay[0] === "" ? "Set departure" : `Departing on ${departureDay[props.languageIndex]} ${departureTime[props.languageIndex]}`;
    const errorMessage = ["Please select both day and time before submitting", "Proszę wybrać dzień i godzinę przed przesłaniem"];

    function handleSetArrivalDay(day: string[]) {
        setArrivalDay(day);
        if (day === [""]) setArrivalTime([""]);
    }

    function handleSetDepartureDay(day: string[]) {
        setDepartureDay(day);
        if (day === [""]) setDepartureTime([""]);
    }

    function submitArrivalTime() {

        if (checkDayAndTimeSelected(arrivalDay[0], arrivalTime[0]) && checkDayAndTimeSelected(departureDay[0], departureTime[0])) {
            const arrival: Arrival = {
                family: props.family.name,
                familyId: props.family.id,
                arrivalDay: arrivalDay[0],
                arrivalTime: arrivalTime[0],
                departureDay: departureDay[0],
                departureTime: departureTime[0]
            }
            
            dispatch(submitUserArrivalTime(arrival))
            .then(() => props.setIsVisible(false));
            setIsError(false);
        } else {
            setIsError(true);
        }
    }   

    return(
        <div className="modalBox">
            <div className="arrival-modal">
                <p className="arrival-text">Let us know approximately when you plan to arrive and set off.</p>
                <p> don't worry we won't hold you to it! We just want an idea of when to expect folks</p>
                <h3>Arrival</h3>
                {
                    ARRIVAL_DAYS.map(arrival =>
                        <ArrivalSelect 
                            arrivalDay={arrival} 
                            isArrival={true} 
                            setDay={handleSetArrivalDay} 
                            setTime={setArrivalTime} 
                            isSelected={arrivalDay === arrival.day} 
                            selectedTime={arrivalTime[0]} 
                            languageIndex={props.languageIndex}/> 
                    )
                }
                <div className="horizontal-bar"/>
                <h3>Departure</h3>
                {
                    DEPARTURE_DAYS.map(arrival =>
                        <ArrivalSelect
                            arrivalDay={arrival}
                            isArrival={false}
                            setDay={handleSetDepartureDay}
                            setTime={setDepartureTime}
                            isSelected={departureDay === arrival.day}
                            selectedTime={departureTime[0]}
                            languageIndex={props.languageIndex}/> 
                    )
                }
            </div>
            <div className="horizontal-bar"/>
            {
                isError &&
                <p className="orange">{errorMessage[props.languageIndex]}</p>
            }
            <div className="arrival-text">{arrivalString}</div>
            <div className="arrival-text">{departureString}</div>
            <div className="cancel-submit-buttons">
                <button className="modalButtonWhite" onClick={() => props.setIsVisible(false)}>Cancel &nbsp; <FontAwesomeIcon icon={faXmark}/> </button>
                <button className="modalButtonWhite" onClick={() => submitArrivalTime()}>Submit &nbsp; <FontAwesomeIcon icon={faCheck}/></button>
            </div>
        </div>
    )
}

function checkDayAndTimeSelected(day: string, time: string) {
    return (day != "" && time != "") || (day == "" && time == "");
}
