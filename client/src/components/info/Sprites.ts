import { ScrollAnimationProps } from "../../models/ScrollAnimationProps";
import  castleSprite  from '../../assets/sprites/castle.svg';
import  treeSprite  from '../../assets/sprites/tree.svg';
import  heartSprite  from '../../assets/sprites/heart.svg';
import  ringLSprite  from '../../assets/sprites/ring-L.svg';
import  ringR1Sprite  from '../../assets/sprites/ring-R1.svg';
import  ringR2Sprite  from '../../assets/sprites/ring-R2.svg';

export const castle: ScrollAnimationProps = {
    id: "sa-castle", 
    svg: castleSprite,
    width: 50,
    startingPos: { x: 50, y: 22},
    hFactor: 0,
    vFactor: 0.5,
    yScrollBounds: [ 0, 9 ],
    fadeInBounds: [ 0, 7 ],
    fadeOutBounds: [ 21, 23 ]
}

export const tree: ScrollAnimationProps = {
    id: "sa-tree", 
    svg: treeSprite, 
    width: 25,
    startingPos: { x: 100, y: 21},
    hFactor: -3.5,
    vFactor: 0,
    yScrollBounds: [ 0, 9 ],
    fadeInBounds: [ 0, 7 ],
    fadeOutBounds: [ 21, 23 ]
}

export const ringL: ScrollAnimationProps = {
    id: "sa-ringL", 
    svg: ringLSprite, 
    width: 25,
    startingPos: { x: 15, y: 41},
    hFactor: 3.2,
    vFactor: -0.4,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 4, 9 ],
    fadeOutBounds: [ 24, 28 ]
}

export const ringR1: ScrollAnimationProps = {
    id: "sa-ringR1", 
    svg: ringR1Sprite, 
    width: 25,
    startingPos: { x: 85, y: 41},
    hFactor: -3.2,
    vFactor: -0.4,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 4, 9 ],
    fadeOutBounds: [ 24, 28 ]
}

export const ringR2: ScrollAnimationProps = {
    id: "sa-ringR2", 
    svg: ringR2Sprite, 
    width: 25,
    startingPos: { x: 85, y: 41},
    hFactor: -3.2,
    vFactor: -0.4,
    yScrollBounds: [ 2, 11 ],
    fadeInBounds: [ 4, 9 ],
    fadeOutBounds: [ 24, 28 ]
}

export const heart: ScrollAnimationProps = {
    id: "sa-heart", 
    svg: heartSprite, 
    width: 10,
    startingPos: { x: 50, y: 41},
    hFactor: 0,
    vFactor: -0.5,
    yScrollBounds: [ 9, 26 ],
    fadeInBounds: [ 9, 14 ],
    fadeOutBounds: [ 21, 26 ]
}

export const tree2: ScrollAnimationProps = {
    id: "sa-tree-2", 
    svg: treeSprite, 
    width: 25,
    startingPos: { x: 50, y: 0},
    hFactor: 1,
    vFactor: 1,
    yScrollBounds: [ 0, 100 ],
    fadeInBounds: [ 100, 100 ],
    fadeOutBounds: [ 100, 100 ]
}