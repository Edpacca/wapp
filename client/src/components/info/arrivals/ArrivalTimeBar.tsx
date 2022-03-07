export function ArrivalTimeBar(props: {day: string, time: string, width: number, quantity: number}) {
    
    const { classStyle, width } = props.width === 0 
    ? { classStyle: "arrival-bar-none", width: "80vw" } 
    : { classStyle: "arrival-bar", width: 0.8 * props.width + "vw" };
    
    return (
        <div className={classStyle} style={{width: width}}>
            <span>{props.time} ({props.quantity})</span>
        </div>
    )
}
