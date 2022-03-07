import { useState } from "react";
import { Arrival } from "../../../models/Arrival";
import { Family } from "../../../models/Family";
import { ArrivalTimeBar } from "./ArrivalTimeBar";

export function ArrivalPlan(props: {arrivals: Arrival[], family: Family}) {
    
    const [max, setMax] = useState(0);

    function renderArrivalTimeBar(day: string, time: string, isArrival: boolean) {
        const arrivals = isArrival 
            ? props.arrivals.filter(arrival => ( arrival.arrivalDay === day && arrival.arrivalTime === time))
            : props.arrivals.filter(arrival => ( arrival.departureDay === day && arrival.departureTime === time));
        const quantity = arrivals.length;
        if (quantity === 0) return <></>

        if (quantity > max) setMax(quantity);
        const width = 100 * quantity / max;
        const families = arrivals.map(arrival => arrival.family);

        return (<ArrivalTimeBar day={day} time={time} width={width} quantity={quantity} isArrival={isArrival} families={families} activeFamily={props.family.name}/>)
    }

    return (
        <div className="arrivals-wrapper">
            <h3>Arrivals</h3>
            {renderArrivalTimeBar('Friday', 'Afternoon', true)}
            {renderArrivalTimeBar('Friday', 'Evening', true)}
            {renderArrivalTimeBar('Saturday', 'Morning', true)}
            {renderArrivalTimeBar('Saturday', 'Noon', true)}
            {renderArrivalTimeBar('Saturday', 'Afternoon', true)}
            {renderArrivalTimeBar('Saturday', 'Evening', true)}
            <h3>Departures</h3>
            {renderArrivalTimeBar('Saturday', 'Afternoon', false)}
            {renderArrivalTimeBar('Saturday', 'Evening', false)}
            {renderArrivalTimeBar('Sunday', 'Morning', false)}
            {renderArrivalTimeBar('Sunday', 'Afternoon', false)}
            {renderArrivalTimeBar('Sunday', 'Evening', false)}
            {renderArrivalTimeBar('Monday', 'Morning', false)}
        </div>
    )
}

