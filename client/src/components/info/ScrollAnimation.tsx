import { useEffect, useState } from "react";
import { Extremum, Panel, ScrollAnimationProps, Transition } from "../../models/ScrollAnimationProps";
import { XY } from "../../models/XY";

export function ScrollAnimation(props: { props: ScrollAnimationProps, panel: Panel, pageHeight: number }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [pos, setPos] = useState(props.props.startingPos);
    
    const panelOffset = props.panel.index * props.panel.height;
    const panelFraction: number = (props.panel.index + 1) / props.panel.max;
    const startingPos: XY = { x: props.props.startingPos.x, y: props.props.startingPos.y};
    const yScrollBounds: Transition = [ props.props.yScrollBounds[0], props.props.yScrollBounds[1]];
    const fadeIn: Transition = [ props.props.fadeInBounds[0], props.props.fadeInBounds[1] ];
    const fadeOut: Transition = [ props.props.fadeOutBounds[0], props.props.fadeOutBounds[1]];
    const outerId = props.props.id;
    const innerId = `${props.props.id}-img`;

    const handleScroll = () => {

        const yScroll = window.scrollY - panelOffset;
        
        if (isBetween(yScroll, yScrollBounds, panelOffset)) {
            const x = startingPos.x - (props.props.width / 2) + (props.props.hFactor * (yScroll));
            const y = startingPos.y + (props.props.vFactor * (yScroll));
            const outerElement = document.getElementById(outerId);
            outerElement!.style.marginLeft = x + "vw";
            outerElement!.style.marginTop = y + "px";
            setPos({x, y});
        }

        const innerElement = document.getElementById(innerId)
        opacity(innerElement!, yScroll, fadeIn, panelOffset, {minima: 0, maxima: 100});
        opacity(innerElement!, yScroll, fadeOut, panelOffset, {minima: 100, maxima: 0});
    } 
    
    useEffect(() => {

        if (!isLoaded) {
            const outerElement = document.getElementById(outerId);
            const innerElement = document.getElementById(innerId);
            outerElement!.style.marginLeft = startingPos.x - (props.props.width / 2) + "vw";
            innerElement!.style.width = props.props.width + "vw";
            outerElement!.style.marginTop = startingPos.y + "px";
            innerElement!.style.opacity = "0";
            setIsLoaded(true);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return(
        <div className="scroll-img-outer">
            <div className="scroll-img-inner" id={props.props.id}>
                <div className="debug-coord">
                    <span className="x">{pos.x.toFixed(0)}</span>
                    ,
                    <span className="y">{pos.y.toFixed(0)}</span>
                </div>
                <img className={props.props.id} src={props.props.svg} id={`${props.props.id}-img`} alt=""></img>
            </div>    
        </div>
    )
}

function opacity(element: HTMLElement, yScroll: number, transition: Transition, offset: number, extremum: Extremum) {
    const offsetYScroll = yScroll - offset;
    const isPositive = extremum.maxima - extremum.minima > 0;
    if (isBetween(yScroll, transition, offset)) {
        element.style.opacity = getPercentage(offsetYScroll, transition, isPositive)
    }

    if (offsetYScroll < transition[0] && isPositive) {
        element.style.opacity = extremum.minima.toString();
    }

    if (offsetYScroll > transition[1]) {
        element.style.opacity = extremum.maxima.toString();
    }
}

function isBetween(value: number, bounds: Transition, offset: number) {
    const offsetvalue = value - offset;
    return offsetvalue >= bounds[0] && offsetvalue <= bounds[1];
}

function getPercentage(yScroll: number, transition: Transition, isPositive: boolean) {
    const percentage = ((yScroll - transition[0]) / ( transition[1] - transition[0]))
    return isPositive ? percentage.toString() : (1 - percentage).toString();
}
