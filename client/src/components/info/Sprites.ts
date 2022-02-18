import { ScrollAnimationProps } from "../../models/ScrollAnimationProps";
import  castleSprite  from '../../assets/sprites/castle.svg';
import  treeSprite  from '../../assets/sprites/tree.svg';
import  heartSprite  from '../../assets/sprites/heart.svg';
import  ringLSprite  from '../../assets/sprites/ring-L.svg';
import  ringRSprite  from '../../assets/sprites/ring-R.svg';

export const castle: ScrollAnimationProps = {
    id: "sa-castle", 
    svg: castleSprite,
    width: 25,
    startingPos: { x: 50, y: 20},
    hFactor: 0,
    vFactor: 0.5,
    yScrollBounds: [ 10, 30 ],
    fadeInBounds: [ 0, 20 ],
    fadeOutBounds: [ 80, 100 ]
}

export const tree: ScrollAnimationProps = {
    id: "sa-tree", 
    svg: treeSprite, 
    width: 5,
    startingPos: { x: 1, y: 1},
    hFactor: 1,
    vFactor: 1,
    yScrollBounds: [ 0, 100 ],
    fadeInBounds: [ 100, 100 ],
    fadeOutBounds: [ 100, 100 ]
}

export const heart: ScrollAnimationProps = {
    id: "sa-heart", 
    svg: heartSprite, 
    width: 5,
    startingPos: { x: 1, y: 1},
    hFactor: 1,
    vFactor: 1,
    yScrollBounds: [ 0, 100 ],
    fadeInBounds: [ 100, 100 ],
    fadeOutBounds: [ 100, 100 ]
}

export const ringL: ScrollAnimationProps = {
    id: "sa-ringL", 
    svg: ringLSprite, 
    width: 5,
    startingPos: { x: 1, y: 1},
    hFactor: 1,
    vFactor: 1,
    yScrollBounds: [ 0, 100 ],
    fadeInBounds: [ 100, 100 ],
    fadeOutBounds: [ 100, 100 ]
}

export const ringR: ScrollAnimationProps = {
    id: "sa-ringR", 
    svg: ringRSprite, 
    width: 5,
    startingPos: { x: 1, y: 1},
    hFactor: 1,
    vFactor: 1,
    yScrollBounds: [ 0, 100 ],
    fadeInBounds: [ 100, 100 ],
    fadeOutBounds: [ 100, 100 ]
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