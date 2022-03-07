export function AdminArrivalTimeBar(props: {day: string, time: string, width: number, quantity: number, isArrival: boolean, families: string[]}) {
    
    const arrivalType = props.isArrival ? "arrival-bar" : "departure-bar"
    
    return (
        <div className={arrivalType} style={{width: 0.8 * props.width + "vw"}}>
            <span>{props.day} {props.time} ({props.quantity})</span>
            <div className="arrival-families">
                {props.families.map(family => 
                    <span>{family}, </span>
                )}
            </div>
        </div>
    )
}