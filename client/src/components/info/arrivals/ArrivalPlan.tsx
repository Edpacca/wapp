import { useState } from "react";
import { Arrival } from "../../../models/Arrival";
import { Family } from "../../../models/Family";
import { ArrivalTimeBar } from "./ArrivalTimeBar";
import { days, times } from '../../../data/constantsEngPol';

export function ArrivalPlan(props: {arrivals: Arrival[], family: Family, languageIndex: 0 | 1}) {
    
    const [max, setMax] = useState(0);

    function renderArrivalTimeBar(day: string[], time: string[], isArrival: boolean) {
        const arrivals = isArrival 
            ? props.arrivals.filter(arrival => ( arrival.arrivalDay === day[0] && arrival.arrivalTime === time[0]))
            : props.arrivals.filter(arrival => ( arrival.departureDay === day[0] && arrival.departureTime === time[0]));
        const quantity = arrivals.length;
        if (quantity === 0) return <></>

        if (quantity > max) setMax(quantity);
        const width = 100 * quantity / max;
        const families = arrivals.map(arrival => arrival.family);

        return (<ArrivalTimeBar day={day[props.languageIndex]} time={time[props.languageIndex]} width={width} quantity={quantity} isArrival={isArrival} families={families} activeFamily={props.family.name}/>)
    }

    return (
        <div className="arrivals-wrapper">
            <h3>Arrivals</h3>
            {renderArrivalTimeBar(days.friday, times.afternoon, true)}
            {renderArrivalTimeBar(days.friday, times.evening, true)}
            {renderArrivalTimeBar(days.saturday, times.morning, true)}
            {renderArrivalTimeBar(days.saturday, times.noon, true)}
            {renderArrivalTimeBar(days.saturday, times.afternoon, true)}
            {renderArrivalTimeBar(days.saturday, times.evening, true)}
            <h3>Departures</h3>
            {renderArrivalTimeBar(days.saturday, times.afternoon, false)}
            {renderArrivalTimeBar(days.saturday, times.evening, false)}
            {renderArrivalTimeBar(days.sunday, times.morning, false)}
            {renderArrivalTimeBar(days.sunday, times.afternoon, false)}
            {renderArrivalTimeBar(days.sunday, times.evening, false)}
            {renderArrivalTimeBar(days.monday, times.morning, false)}
        </div>
    )
}

