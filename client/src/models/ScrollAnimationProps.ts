import { XY } from "./XY";

export interface ScrollAnimationProps {
    id: string, 
    svg: string,
    width: number,
    startingPos: XY,
    yScrollBounds: Transition,
    hFactor: number,
    vFactor: number,
    fadeInBounds: Transition,
    fadeOutBounds: Transition
    hDirection?: 'LR' | 'RL',
    vDirection?: 'UD' | 'DU',
}

export type Transition = [number, number];
export interface Panel {
    index: number,
    max: number,
}