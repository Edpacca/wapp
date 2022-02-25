import { ScrollAnimationProps } from "../../../models/ScrollAnimationProps";
import  castleSprite  from '../../../assets/sprites/castle.svg';
import  treeSprite  from '../../../assets/sprites/tree.svg';
import  heartSprite  from '../../../assets/sprites/heart.svg';
import  ringLSprite  from '../../../assets/sprites/ring-L.svg';
import  ringR1Sprite  from '../../../assets/sprites/ring-R1.svg';
import  ringR2Sprite  from '../../../assets/sprites/ring-R2.svg';
import scrollSprite from '../../../assets/sprites/scroll.svg';
import quillSprite from '../../../assets/sprites/quill.svg';
import scrollASprite from '../../../assets/sprites/scroll-A.svg';
import scrollESprite from '../../../assets/sprites/scroll-E.svg';
import cameraTop1Sprite from '../../../assets/sprites/camera-top1.svg';
import cameraTop2Sprite from '../../../assets/sprites/camera-top2.svg';
import cameraBottomSprite from '../../../assets/sprites/camera-bottom1.svg';
import cameraLSprite from '../../../assets/sprites/camera-L1.svg';
import cameraRSprite from '../../../assets/sprites/camera-R1.svg';
import cameraInnerSprite from '../../../assets/sprites/camera-inner-ring.svg';
import cameraOuterSprite from '../../../assets/sprites/camera-outer-ring.svg';

// Registy
export const scroll: ScrollAnimationProps = {
    id: "sa-scroll", 
    svg: scrollSprite, 
    width: 0.60,
    animationBounds: [ 0, 20 ],
    initialPosition: { x: 0.50, y: 0.90},
    finalPosition: { x: 0.50, y: 0.50 },
    fadeInBounds: [ 0, 25 ],
    fadeOutBounds: [ 60, 80 ]
}

export const quill: ScrollAnimationProps = {
    id: "sa-quill", 
    svg: quillSprite, 
    width: 0.20,
    animationBounds: [ 15, 40 ],
    initialPosition: { x: 0.10, y: 0.60},
    finalPosition: { x: 0.65, y: 0.47 },
    fadeInBounds: [ 15, 30 ],
    fadeOutBounds: [ 60, 80 ]
}

export const scrollA: ScrollAnimationProps = {
    id: "sa-scrollA", 
    svg: scrollASprite, 
    width: 0.60,
    animationBounds: [ 0, 40 ],
    initialPosition: { x: 0.50, y: 0.50},
    finalPosition: { x: 0.50, y: 0.50 },
    fadeInBounds: [ 23, 26 ],
    fadeOutBounds: [ 60, 80 ]
}

export const scrollE: ScrollAnimationProps = {
    id: "sa-scrollE", 
    svg: scrollESprite, 
    width: 0.60,
    initialPosition: { x: 0.50, y: 0.50},
    finalPosition: { x: 0.50, y: 0.50 },
    animationBounds: [ 0, 40 ],
    fadeInBounds: [ 28, 30 ],
    fadeOutBounds: [ 60, 80 ]
}

////////////////////////////////////////////////////////////////////////////////
// Ceremony
export const castle: ScrollAnimationProps = {
    id: "sa-castle", 
    svg: castleSprite,
    width: 0.60,
    animationBounds: [ 2, 16 ],
    initialPosition: { x: 0.50, y: 0.30},
    finalPosition: { x: 0.50, y: 0.50 },  
    fadeInBounds: [ 2, 16 ],
    fadeOutBounds: [ 45, 55 ]
}

export const tree: ScrollAnimationProps = {
    id: "sa-tree", 
    svg: treeSprite, 
    width: 0.30,
    animationBounds: [ 2, 16 ],
    initialPosition: { x: 0.100, y: 0.35},
    finalPosition: { x: 0.70, y: 0.45 },
    fadeInBounds: [ 2, 16 ],
    fadeOutBounds: [ 45, 55 ]
}

export const ringL: ScrollAnimationProps = {
    id: "sa-ringL", 
    svg: ringLSprite, 
    width: 0.30,
    animationBounds: [ 12, 20 ],
    initialPosition: { x: 0.15, y: 0.60},
    finalPosition: { x: 0.50, y: 0.60 },
    fadeInBounds: [ 12, 22 ],
    fadeOutBounds: [ 70, 80 ]
}

export const ringR1: ScrollAnimationProps = {
    id: "sa-ringR1", 
    svg: ringR1Sprite, 
    width: 0.30,
    animationBounds: [ 12, 20 ],
    initialPosition: { x: 0.85, y: 0.60},
    finalPosition: { x: 0.50, y: 0.60 },
    fadeInBounds: [ 12, 22 ],
    fadeOutBounds: [ 70, 80 ]
}

export const ringR2: ScrollAnimationProps = {
    id: "sa-ringR2", 
    svg: ringR2Sprite, 
    width: 0.30,
    animationBounds: [ 12, 20 ],
    initialPosition: { x: 0.85, y: 0.60},
    finalPosition: { x: 0.50, y: 0.60 },
    fadeInBounds: [ 12, 22 ],
    fadeOutBounds: [ 70, 80 ]
}

export const heart: ScrollAnimationProps = {
    id: "sa-heart", 
    svg: heartSprite, 
    width: 0.13,
    animationBounds: [ 17, 50 ],
    initialPosition: { x: 0.50, y: 0.70},
    finalPosition: { x: 0.50, y: 0.40 },  
    fadeInBounds: [ 17, 30 ],
    fadeOutBounds: [ 55, 65 ]
}

////////////////////////////////////////////////////////////////////////////////
// Photographs
export const cameraTop1: ScrollAnimationProps = {
    id: "sa-cameraTop1", 
    svg: cameraTop1Sprite, 
    width: 0.60,
    animationBounds: [ 10, 24 ],
    initialPosition: { x: 0.50, y: 0.10},
    finalPosition: { x: 0.50, y: 0.50 },  
    fadeInBounds: [ 10, 15 ],
    fadeOutBounds: [ 70, 80 ]
}

export const cameraTop2: ScrollAnimationProps = {
    id: "sa-cameraTop2", 
    svg: cameraTop2Sprite, 
    width: 0.60,
    animationBounds: [ 2, 24 ],
    initialPosition: { x: 0.50, y: 0.10},
    finalPosition: { x: 0.50, y: 0.50 },  
    fadeInBounds: [ 2, 15 ],
    fadeOutBounds: [ 70, 80 ]
}

export const cameraBottom: ScrollAnimationProps = {
    id: "sa-cameraBottom", 
    svg: cameraBottomSprite, 
    width: 0.60,
    animationBounds: [ 3, 24 ],
    initialPosition: { x: 0.50, y: 0.90},
    finalPosition: { x: 0.50, y: 0.50 },  
    fadeInBounds: [ 3, 15 ],
    fadeOutBounds: [ 70, 80 ]
}

export const cameraL: ScrollAnimationProps = {
    id: "sa-cameraL", 
    svg: cameraLSprite, 
    width: 0.60,
    animationBounds: [ 2, 24 ],
    initialPosition: { x: 0.0, y: 0.30},
    finalPosition: { x: 0.50, y: 0.50 },  
    fadeInBounds: [ 2, 15 ],
    fadeOutBounds: [ 70, 80 ]
}

export const cameraR: ScrollAnimationProps = {
    id: "sa-cameraR", 
    svg: cameraRSprite, 
    width: 0.60,
    animationBounds: [ 2, 24 ],
    initialPosition: { x: 1.0, y: 0.30},
    finalPosition: { x: 0.50, y: 0.50 },  
    fadeInBounds: [ 2, 15 ],
    fadeOutBounds: [ 70, 80 ]
}

export const cameraInner: ScrollAnimationProps = {
    id: "sa-cameraInner", 
    svg: cameraInnerSprite, 
    width: 0.60,
    animationBounds: [ 0, 0 ],
    initialPosition: { x: 0.50, y: 0.60},
    finalPosition: { x: 0.50, y: 0.50 },  
    fadeInBounds: [ 5, 15 ],
    fadeOutBounds: [ 70, 80 ]
}

export const cameraOuter: ScrollAnimationProps = {
    id: "sa-cameraOuter", 
    svg: cameraOuterSprite, 
    width: 0.60,
    animationBounds: [ 0, 0 ],
    initialPosition: { x: 0.50, y: 0.60},
    finalPosition: { x: 0.50, y: 0.50 },  
    fadeInBounds: [ 13, 15 ],
    fadeOutBounds: [ 70, 80 ]
}
