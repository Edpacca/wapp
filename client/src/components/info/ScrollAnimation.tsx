import { useEffect, useState } from "react";
import { Panel, ScrollAnimationProps, Transition } from "../../models/ScrollAnimationProps";
import { XY } from "../../models/XY";

export function ScrollAnimation(props: { props: ScrollAnimationProps, panel: Panel, maxHeight: number }) {

    const [isLoaded, setIsLoaded] = useState(false);
    const [yST, setYST] = useState(0);
    const [xyT, setXyT] = useState(props.props.startingPos);
    const panelOffset: number = ( props.panel.index / props.panel.max ) * props.maxHeight;
    const startingPos: XY = { x: props.props.startingPos.x, y: props.props.startingPos.y + panelOffset };
    const yScrollBounds: Transition = [ props.props.yScrollBounds[0] + panelOffset, props.props.yScrollBounds[1] + panelOffset ];
    const fadeIn: Transition = [ props.props.fadeInBounds[0] + panelOffset, props.props.fadeInBounds[1] + panelOffset ];
    const fadeOut: Transition = [ props.props.fadeOutBounds[0] + panelOffset, props.props.fadeOutBounds[1] + panelOffset ];
    const outerId = props.props.id;
    const innerId = `${props.props.id}-img`;

    const handleScroll = () => {

        const yScroll = 100 * window.scrollY / props.maxHeight;
        setYST(yScroll);
        if (isBetween(yScroll, yScrollBounds)) {
            const x = startingPos.x - (props.props.width / 2) + (props.props.hFactor * yScroll);
            const y = startingPos.y + (props.props.vFactor * yScroll);
            const outerElement = document.getElementById(outerId);
            outerElement!.style.left = x + "vw";
            outerElement!.style.top = y + "vh";
            setXyT({x, y});
        }

        const innerElement = document.getElementById(innerId)
        opacity(innerElement!, yScroll, fadeIn, 'in');
        opacity(innerElement!, yScroll, fadeOut, 'out');
    } 
    
    useEffect(() => {

        if (!isLoaded) {
            const outerElement = document.getElementById(outerId);
            const innerElement = document.getElementById(innerId);
            outerElement!.style.left = startingPos.x - (props.props.width / 2) + "vw";
            outerElement!.style.top = startingPos.y + "vh";
            innerElement!.style.width = props.props.width + "vw";
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
                <img className={props.props.id} src={props.props.svg} id={`${props.props.id}-img`} alt=""></img>
                <p>{yST}</p>
                <p>{xyT.x + " , " + xyT.y}</p>
            </div>    
        </div>

    )
}

function absToPanelPercentage(yScroll: number, panel: Panel) {

}

function opacity(element: HTMLElement, yScroll: number, transition: Transition, direction: 'in' | 'out') {
    if (isBetween(yScroll, transition)) {
        element.style.opacity = getPercentage(yScroll, transition, direction);
    }
    if (direction === 'out' && yScroll > transition[1]) {
        element.style.opacity = "0";
    }
}

function isBetween(value: number, bounds: Transition) {
    return value >= bounds[0] && value <= bounds[1];
}

function getPercentage(yScroll: number, transition: Transition, direction: 'in' | 'out' ) {
    const offset = direction === 'in' ? 0 : 1;
    const modifier = direction === 'in' ? 1 : -1;
    const percentage = offset + (modifier * ((yScroll - transition[0]) / ( transition[1] - transition[0])))
    return percentage.toString();
}
