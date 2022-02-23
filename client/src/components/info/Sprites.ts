import { ScrollAnimationProps } from "../../models/ScrollAnimationProps";
import  castleSprite  from '../../assets/sprites/castle.svg';
import  treeSprite  from '../../assets/sprites/tree.svg';
import  heartSprite  from '../../assets/sprites/heart.svg';
import  ringLSprite  from '../../assets/sprites/ring-L.svg';
import  ringR1Sprite  from '../../assets/sprites/ring-R1.svg';
import  ringR2Sprite  from '../../assets/sprites/ring-R2.svg';
import scrollSprite from '../../assets/sprites/scroll.svg';
import quillSprite from '../../assets/sprites/quill.svg';
import scrollASprite from '../../assets/sprites/scroll-A.svg';
import scrollESprite from '../../assets/sprites/scroll-E.svg';
import cameraTop1Sprite from '../../assets/sprites/camera-top1.svg';
import cameraTop2Sprite from '../../assets/sprites/camera-top2.svg';
import cameraBottomSprite from '../../assets/sprites/camera-bottom1.svg';
import cameraLSprite from '../../assets/sprites/camera-L1.svg';
import cameraRSprite from '../../assets/sprites/camera-R1.svg';
import cameraInnerSprite from '../../assets/sprites/camera-inner-ring.svg';
import cameraOuterSprite from '../../assets/sprites/camera-outer-ring.svg';

// Registy
export const scroll: ScrollAnimationProps = {
    id: "sa-scroll", 
    svg: scrollSprite, 
    width: 50,
    startingPos: { x: 50, y: 10},
    hFactor: 0,
    vFactor: 1.2,
    yScrollBounds: [ 0, 40 ],
    fadeInBounds: [ 12, 28 ],
    fadeOutBounds: [ 80, 90 ]
}

export const quill: ScrollAnimationProps = {
    id: "sa-quill", 
    svg: quillSprite, 
    width: 20,
    startingPos: { x: 10, y: 22},
    hFactor: 1.6,
    vFactor: 0.1,
    yScrollBounds: [ 0, 40 ],
    fadeInBounds: [ 12, 28 ],
    fadeOutBounds: [ 80, 90 ]
}

export const scrollA: ScrollAnimationProps = {
    id: "sa-scrollA", 
    svg: scrollASprite, 
    width: 50,
    startingPos: { x: 50, y: 10},
    hFactor: 0,
    vFactor: 1.2,
    yScrollBounds: [ 0, 40 ],
    fadeInBounds: [ 12, 28 ],
    fadeOutBounds: [ 80, 90 ]
}

export const scrollE: ScrollAnimationProps = {
    id: "sa-scrollE", 
    svg: scrollESprite, 
    width: 50,
    startingPos: { x: 50, y: 10},
    hFactor: 0,
    vFactor: 1.2,
    yScrollBounds: [ 0, 40 ],
    fadeInBounds: [ 12, 28 ],
    fadeOutBounds: [ 80, 90 ]
}

// Ceremony
export const castle: ScrollAnimationProps = {
    id: "sa-castle", 
    svg: castleSprite,
    width: 60,
    startingPos: { x: 50, y: 30},
    hFactor: 0,
    vFactor: 0.5,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 2, 7 ],
    fadeOutBounds: [ 23, 26 ]
}

export const tree: ScrollAnimationProps = {
    id: "sa-tree", 
    svg: treeSprite, 
    width: 30,
    startingPos: { x: 100, y: 29},
    hFactor: -2.3,
    vFactor: 0,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 2, 7 ],
    fadeOutBounds: [ 23, 26 ]
}

export const ringL: ScrollAnimationProps = {
    id: "sa-ringL", 
    svg: ringLSprite, 
    width: 30,
    startingPos: { x: 15, y: 49},
    hFactor: 3.06,
    vFactor: -0.4,
    yScrollBounds: [ 4, 12 ],
    fadeInBounds: [ 4, 9 ],
    fadeOutBounds: [ 27, 34 ]
}

export const ringR1: ScrollAnimationProps = {
    id: "sa-ringR1", 
    svg: ringR1Sprite, 
    width: 30,
    startingPos: { x: 85, y: 49},
    hFactor: -3.06,
    vFactor: -0.4,
    yScrollBounds: [ 4, 12 ],
    fadeInBounds: [ 4, 9 ],
    fadeOutBounds: [ 29, 34 ]
}

export const ringR2: ScrollAnimationProps = {
    id: "sa-ringR2", 
    svg: ringR2Sprite, 
    width: 30,
    startingPos: { x: 85, y: 49},
    hFactor: -3.06,
    vFactor: -0.4,
    yScrollBounds: [ 4, 12 ],
    fadeInBounds: [ 4, 9 ],
    fadeOutBounds: [ 27, 34 ]
}

export const heart: ScrollAnimationProps = {
    id: "sa-heart", 
    svg: heartSprite, 
    width: 13,
    startingPos: { x: 50, y: 49},
    hFactor: 0,
    vFactor: -0.5,
    yScrollBounds: [ 10, 32 ],
    fadeInBounds: [ 9, 14 ],
    fadeOutBounds: [ 24, 32 ]
}

// Photographs
export const cameraTop1: ScrollAnimationProps = {
    id: "sa-cameraTop1", 
    svg: cameraTop1Sprite, 
    width: 40,
    startingPos: { x: 50, y: 30},
    hFactor: 0,
    vFactor: 1.5,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 2, 7 ],
    fadeOutBounds: [ 23, 26 ]
}

export const cameraTop2: ScrollAnimationProps = {
    id: "sa-cameraTop2", 
    svg: cameraTop2Sprite, 
    width: 40,
    startingPos: { x: 50, y: 30},
    hFactor: 0,
    vFactor: 1.5,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 2, 7 ],
    fadeOutBounds: [ 23, 26 ]
}

export const cameraBottom: ScrollAnimationProps = {
    id: "sa-cameraBottom", 
    svg: cameraBottomSprite, 
    width: 40,
    startingPos: { x: 50, y: 30},
    hFactor: 0,
    vFactor: 1.5,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 2, 7 ],
    fadeOutBounds: [ 23, 26 ]
}

export const cameraL: ScrollAnimationProps = {
    id: "sa-cameraL", 
    svg: cameraLSprite, 
    width: 40,
    startingPos: { x: 0, y: 45.6},
    hFactor: 4.75,
    vFactor: 0,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 2, 7 ],
    fadeOutBounds: [ 23, 26 ]
}

export const cameraR: ScrollAnimationProps = {
    id: "sa-cameraR", 
    svg: cameraRSprite, 
    width: 40,
    startingPos: { x: 100, y: 45.6},
    hFactor: -4.75,
    vFactor: 0,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 2, 7 ],
    fadeOutBounds: [ 23, 26 ]
}

export const cameraInner: ScrollAnimationProps = {
    id: "sa-cameraInner", 
    svg: cameraInnerSprite, 
    width: 40,
    startingPos: { x: 50, y: 30},
    hFactor: 0,
    vFactor: 1.5,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 2, 7 ],
    fadeOutBounds: [ 23, 26 ]
}

export const cameraOuter: ScrollAnimationProps = {
    id: "sa-cameraOuter", 
    svg: cameraOuterSprite, 
    width: 40,
    startingPos: { x: 50, y: 30},
    hFactor: 0,
    vFactor: 1.5,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 2, 7 ],
    fadeOutBounds: [ 23, 26 ]
}
