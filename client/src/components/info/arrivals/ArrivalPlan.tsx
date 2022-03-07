import { useState } from "react";
import { Arrival } from "../../../models/Arrival";
import { ArrivalTimeBar } from "./ArrivalTimeBar";

export function ArrivalPlan(props: {arrivals: Arrival[]}) {
    
    const [max, setMax] = useState(0);

    function renderArrivalTimeBar(day: string, time: string) {
        const arrivals = props.arrivals.filter(arrival => ( arrival.arrivalDay === day && arrival.arrivalTime === time));
        const quantity = arrivals.length;
        if (quantity > max) setMax(quantity);
        const width = 100 * quantity / max;
        return (
            <div>
               <ArrivalTimeBar day={day} time={time} width={width} quantity={quantity}/>
               <div className="arrival-families">
                    { arrivals.map(arrival => <span>{arrival.family}, </span>) }
               </div>

            </div>
        )
    }

    return (
        <div className="arrivals-wrapper">
            <h3>Friday</h3>
            {renderArrivalTimeBar('Friday', 'Afternoon')}
            {renderArrivalTimeBar('Friday', 'Evening')}
            <div className="horizontal-bar"/>
            <h3>Saturday</h3>
            {renderArrivalTimeBar('Saturday', 'Morning')}
            {renderArrivalTimeBar('Saturday', 'Noon')}
            {renderArrivalTimeBar('Saturday', 'Afternoon')}
            {renderArrivalTimeBar('Saturday', 'Evening')}
        </div>
    )
}

