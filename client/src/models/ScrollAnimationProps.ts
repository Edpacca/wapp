import { Transition } from "./Transition";
import { XY } from "./XY";

export interface ScrollAnimationProps {
    id: string, 
    svg: string,
    width: number,
    animationBounds: Transition,
    initialPosition: XY,
    finalPosition: XY,
    fadeInBounds: Transition,
    fadeOutBounds: Transition
}
