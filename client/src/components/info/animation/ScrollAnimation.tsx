import { useEffect, useState } from "react";
import { Extremum } from "../../../models/Extremum";
import { ScrollAnimationProps } from "../../../models/ScrollAnimationProps";
import { PanelProps } from "../../../models/ScrollDimensionProps";
import { Transition } from "../../../models/Transition";
import { XY } from "../../../models/XY";
import ScrollImg from "./ScrollImg";

export function ScrollAnimation(props: { animation: ScrollAnimationProps, panel: PanelProps, yScrollPercent: number, isPanelActive: boolean }) {

    const width = props.animation.width * props.panel.height;

    const initialPosition: XY = { 
        x: (props.animation.initialPosition.x * props.panel.height) - (width / 2),
        y: props.animation.initialPosition.y * props.panel.height
    };
    const finalPosition: XY = {
        x: (props.animation.finalPosition.x * props.panel.height) - (width / 2),
        y: props.animation.finalPosition.y * props.panel.height,
    } 

    const [position, setPosition] = useState<XY>(initialPosition);
    const [opacity, setOpacity] = useState<number>(0);

    
    useEffect(() => {
        handleScrollAnimation();
    }, [props.yScrollPercent]);

    function handleScrollAnimation() {
        if (props.isPanelActive) {
            if (isBetween(props.yScrollPercent, props.animation.animationBounds)) {
                const percentage = getPercentage(props.yScrollPercent, props.animation.animationBounds);
                const xDiff = percentage * (finalPosition.x - initialPosition.x);
                const yDiff = percentage * (finalPosition.y - initialPosition.y);
                setPosition({x: initialPosition.x + xDiff, y: initialPosition.y + yDiff });
            }
            
            if (props.yScrollPercent > props.animation.animationBounds[1]) {
                setPosition(finalPosition);
            }

            handleOpacity( props.yScrollPercent, props.animation.fadeInBounds, {minima: 0, maxima: 100});
            handleOpacity(props.yScrollPercent, props.animation.fadeOutBounds, {minima: 100, maxima: 0});
        }
    }

    function handleOpacity(yScrollPercent: number, transition: Transition, extremum: Extremum) {
        const isPositive = extremum.maxima - extremum.minima > 0;
    
        if (isBetween(yScrollPercent, transition)) {
            const percentage = getPercentage(yScrollPercent, transition);
            const opacity = isPositive 
                ? percentage 
                : 1 - percentage;
            setOpacity(opacity);
        }
    
        if (yScrollPercent < transition[0] && isPositive) setOpacity(extremum.minima);
        if (yScrollPercent > transition[1]) setOpacity(extremum.maxima);
    }

    return(
        <ScrollImg position={position} opacity={opacity} width={width} id={props.animation.id} svg={props.animation.svg} />
    )
}

function isBetween(value: number, bounds: Transition) {
    return value >= bounds[0] && value <= bounds[1];
}

function getPercentage(yScrollPercent: number, transition: Transition) {
    const percentage = (yScrollPercent - transition[0]) / ( transition[1] - transition[0]);
    return percentage;
}
