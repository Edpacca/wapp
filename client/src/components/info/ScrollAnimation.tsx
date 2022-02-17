import { useEffect, useState } from "react";
import { XY } from "../../models/XY";

export function ScrollAnimation(props: { imageUrl: string, id: string, startingPos: XY, vFactor: number,  hFactor: number}) {

    const [yScrollPosition, setyScrollPosition] = useState(0);
    const [imgPos, setImgPos] = useState<XY>(props.startingPos);

    const handleScroll = () => {
        const yScroll = window.scrollY;
        const x = props.startingPos.x + (props.hFactor * yScroll);
        const y = props.startingPos.y + (props.vFactor * yScroll);
        setImgPos({x, y});
        const element = document.getElementById(props.id)
        if (element) { 
            element.style.left = x.toString() + "px";
            element.style.top = y.toString() + "px";
        }
        setyScrollPosition(yScroll)
    } 
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {

            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className="scroll-img-wrapper" id={props.id}>
            <img className={props.id} src={props.imageUrl} alt=""></img>
            <p>{yScrollPosition}</p>
            <p>x: {imgPos.x}</p>
            <p>y: {imgPos.y}</p>
        </div>    
    )
}
