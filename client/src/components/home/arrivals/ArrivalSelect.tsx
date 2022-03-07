import { ArrivalDay } from "../../../data/arrivalDays";

export function ArrivalSelect (props: {arrivalDay: ArrivalDay, isSelected: boolean, isArrival: boolean, setDay: (day: string) => void, setTime: (time: string) => void, selectedTime: string}) {
    const type = props.isArrival ? "arrival" : "departure";
    
    return (
        <div className="arrival-select">
            <button 
                className={`arrival-button${props.isSelected ? ` selected-${type}` : ""}`} 
                onClick={() => props.setDay(props.isSelected ? "" : props.arrivalDay.day)}>
                    {props.arrivalDay.day}
            </button>
            {
                props.isSelected &&
                <div className="arrival-times">
                {
                    props.arrivalDay.times.map(
                        time => 
                        <button 
                            key={time}
                            className={`arrival-time ${time === props.selectedTime ? ` selected-${type}` : ""}`}             
                            onClick={() => props.setTime(time)}
                                >{time}
                        </button>
                )
                }
                </div>

            }
        </div>
    )
}
