import { width } from "@mui/system";

export function ArrivalTimeBar(props: {day: string, time: string, width: number}) {
    
    const { classStyle, width } = props.width === 0 
    ? { classStyle: "arrival-bar-none", width: "80vw" } 
    : { classStyle: "arrival-bar", width: 0.8 * props.width + "vw" };
    
    return (
        <div className={classStyle} style={{width: width}}>
            <span>{props.day} {props.time}</span>
        </div>
    )
}