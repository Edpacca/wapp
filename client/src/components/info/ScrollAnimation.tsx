import { useEffect, useState } from "react";
import { XY } from "../../models/XY";

export function ScrollAnimation(props: { imageUrl: string, id: string, startingPos: XY, vFactor: number,  hFactor: number}) {

    const [isLoaded, setIsLoaded] = useState(false);

    const handleScroll = () => {
        const yScroll = window.scrollY;
        const x = props.startingPos.x + (props.hFactor * yScroll);
        const y = props.startingPos.y + (props.vFactor * yScroll);
        const element = document.getElementById(props.id)
        if (element) { 
            element.style.left = x.toString() + "px";
            element.style.top = y.toString() + "px";
        }
    } 
    
    useEffect(() => {

        if (!isLoaded) {
            const element = document.getElementById(props.id)
            if (element) { 
                element.style.left = props.startingPos.x.toString() + "px";
                element.style.top = props.startingPos.y.toString() + "px";
            }
            setIsLoaded(true);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className="scroll-img-inner" id={props.id}>
            <img className={props.id} src={props.imageUrl} alt=""></img>
        </div>    
    )
}
