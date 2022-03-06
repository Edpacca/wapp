import { useState } from "react";
import { Family } from "../../../models/Family";
import { ARRIVAL_DAYS } from "../../../data/arrivalDays";

export function SubmitArrivalTimeModal(props: {family: Family, setIsVisible: (isVisible: boolean) => void}) {

    return(
        <div className="modalBox">
            <div>
                <p>Let us know approximately when you plan to arrive - don't worry we won't hold you to it! It just helps to give us an idea of when to expect folks</p>
                {
                    ARRIVAL_DAYS.map(arrival => <button className="arrival-button">{arrival.day}</button>)
                }
            </div>
            <button className="modalButton" onClick={() => props.setIsVisible(false)}>Cancel</button>
            <button className="modalButton" onClick={() => {}}>Submit</button>
        </div>
    )
}
