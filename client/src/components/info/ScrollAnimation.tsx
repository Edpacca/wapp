import { useEffect, useState } from "react";

export function ScrollAnimation(props: { imageUrl: string, id: string, vFactor: number,  hFactor: number}) {

    const [scrollPosition, setScrollPosition] = useState(0);
    const handleScroll = () => {
        const position = window.scrollY;
        const element = document.getElementById(props.id);
        if (element) { 
            element.style.marginTop = (props.vFactor * position).toString() + "px";
            element.style.marginLeft = (props.hFactor * position).toString() + "px";
        }
        setScrollPosition(position)
    } 
    
    useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => {

            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className="scroll-img-wrapper" id={props.id}>
            <img  src={props.imageUrl} alt=""></img>
            <p>{scrollPosition}</p>
        </div>    
    )
}
