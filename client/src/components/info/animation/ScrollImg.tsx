import { XY } from "../../../models/XY";

const ScrollImg = (props: {position: XY, opacity: number, width: number, id: string, svg: string}) => {
    return (
        <div className="scroll-img-outer">
            <div className="scroll-img-inner" style={{marginTop: props.position.y + "px", marginLeft: props.position.x + "px"}}  id={props.id}>
                <img style={{opacity: props.opacity, width: props.width + "px"}} className={props.id} src={props.svg} id={`${props.id}-img`} alt=""></img>
            </div>    
        </div>
    )
}

export default ScrollImg;
