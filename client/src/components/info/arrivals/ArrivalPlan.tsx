import { Arrival } from "../../../models/Arrival";
import { ArrivalTimeBar } from "./ArrivalTimeBar";

export function ArrivalPlan(props: {arrivals: Arrival[]}) {
    
    const max = props.arrivals.length;

    function renderArrivalTimeBar(day: string, time: string) {
        const quantity = props.arrivals.filter(arrival => ( arrival.day === day && arrival.time === time)).length;
        const width = 100 * quantity / max;
        return <ArrivalTimeBar day={day} time={time} width={width}/>
    }

    return (
        <div className="arrivals-wrapper">
            {renderArrivalTimeBar('Friday', 'Afternoon')}
            {renderArrivalTimeBar('Friday', 'Evening')}
            {renderArrivalTimeBar('Saturday', 'Morning')}
            {renderArrivalTimeBar('Saturday', 'Noon')}
            {renderArrivalTimeBar('Saturday', 'Afternoon')}
            {renderArrivalTimeBar('Saturday', 'Evening')}
        </div>
    )
}

