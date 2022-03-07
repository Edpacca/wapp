export function ArrivalTimeBar(props: {day: string, time: string, width: number, quantity: number, isArrival: boolean, families: string[], activeFamily: string}) {
    
    const arrivalType = props.isArrival ? "arrival-bar" : "departure-bar"
    const activeBar = props.families.includes(props.activeFamily) ? "-active" : ""
    
    return (
        <div className={arrivalType + activeBar} style={{width: 0.8 * props.width + "vw"}}>
            <span>{props.day} {props.time} ({props.quantity})</span>
            <div className="arrival-families">
                {props.families.map(family => 
                    <span className={family === props.activeFamily ? "active" : ""}>{family}, </span>
                )}
            </div>
        </div>
    )
}
