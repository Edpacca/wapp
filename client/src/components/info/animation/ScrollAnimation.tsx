import { useEffect, useState } from "react";
import { Extremum } from "../../../models/Extremum";
import { ScrollAnimationProps } from "../../../models/ScrollAnimationProps";
import { PanelProps } from "../../../models/ScrollDimensionProps";
import { Transition } from "../../../models/Transition";
import { XY } from "../../../models/XY";

export function ScrollAnimation(props: { animation: ScrollAnimationProps, panel: PanelProps, yScrollPercent: number, isPanelActive: boolean }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const width = (props.animation.width * 0.01 * props.panel.width);

    const initalPosition: XY = { 
        x: props.animation.initialPosition.x * 0.01 * props.panel.width - (width / 2),
        y: props.animation.initialPosition.y * 0.01 * props.panel.height
    };
    const finalPosition: XY = {
        x: props.animation.finalPosition.x * 0.01 * props.panel.width - (width / 2),
        y: props.animation.finalPosition.y * 0.01 * props.panel.height,
    } 

    const yScrollPercent = props.yScrollPercent;
    const yScrollBounds: Transition = props.animation.animationBounds;

    const fadeIn: Transition = props.animation.fadeInBounds;
    const fadeOut: Transition = props.animation.fadeOutBounds;

    const outerId = props.animation.id;
    const innerId = `${props.animation.id}-img`;

    function handleScroll() {
        if (props.isPanelActive) {
            if (isBetween(yScrollPercent, yScrollBounds)) {
                const outerElement = document.getElementById(outerId);
    
                if (outerElement) {
                    const percentage = getPercentage(yScrollPercent, yScrollBounds);
                    const xDiff = percentage * (finalPosition.x - initalPosition.x);
                    const yDiff = percentage * (finalPosition.y - initalPosition.y);
                    outerElement!.style.marginLeft = initalPosition.x + xDiff + "px";
                    outerElement!.style.marginTop = initalPosition.y + yDiff + "px";
                }
            }
            
            if (yScrollPercent > yScrollBounds[1]) {
                const outerElement = document.getElementById(outerId);
                if (outerElement) {
                    outerElement!.style.marginLeft = finalPosition + "px";
                    outerElement!.style.marginTop = finalPosition + "px";
                }
            }
    
            const innerElement = document.getElementById(innerId);
            if (innerElement) {
                opacity(innerElement!, yScrollPercent, fadeIn, {minima: 0, maxima: 100});
                opacity(innerElement!, yScrollPercent, fadeOut, {minima: 100, maxima: 0});
            }
        }
    }
    
    useEffect(() => {
        if (!isLoaded) {
            const outerElement = document.getElementById(outerId);
            const innerElement = document.getElementById(innerId);
            innerElement!.style.width = width + "px";
            outerElement!.style.marginLeft = initalPosition.x + "px";
            outerElement!.style.marginTop = initalPosition.y + "px";
            innerElement!.style.opacity = "0";
            setIsLoaded(true);
        }

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };

    }, [yScrollPercent]);

    return(
        <div className="scroll-img-outer">
            <div className="scroll-img-inner" id={props.animation.id}>
                <img className={props.animation.id} src={props.animation.svg} id={`${props.animation.id}-img`} alt=""></img>
            </div>    
        </div>
    )
}

function opacity(element: HTMLElement, yScrollPercent: number, transition: Transition, extremum: Extremum) {
    const isPositive = extremum.maxima - extremum.minima > 0;

    if (isBetween(yScrollPercent, transition)) {
        const percentage = getPercentage(yScrollPercent, transition);
        element.style.opacity = isPositive 
            ? percentage.toString() 
            : (1 - percentage).toString();
    }

    if (yScrollPercent < transition[0] && isPositive) {
        element.style.opacity = extremum.minima.toString();
    }

    if (yScrollPercent > transition[1]) {
        element.style.opacity = extremum.maxima.toString();
    }
}

function isBetween(value: number, bounds: Transition) {
    return value >= bounds[0] && value <= bounds[1];
}

function getPercentage(yScrollPercent: number, transition: Transition) {
    const percentage = (yScrollPercent - transition[0]) / ( transition[1] - transition[0]);
    return percentage;
}
