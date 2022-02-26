import { ScrollAnimation } from "./animation/ScrollAnimation";
import { 
    scroll, quill, scrollA, scrollE, 
    castle, tree, heart, ringL, ringR1, ringR2,
    cameraTop1, cameraTop2, cameraBottom, cameraL, cameraR, cameraInner, cameraOuter, cameraFlash,
    drinks

} from "./animation/Sprites";
import { useEffect, useState } from "react";
import { PanelProps } from "../../models/ScrollDimensionProps";
import { AnimationPanel } from "./animation/AnimationPanel";

export function BigDay() {

    const clientHeight = document.documentElement.clientHeight;
    const clientWidth = document.documentElement.scrollWidth;
    const panelHeight = Math.max(clientHeight, clientWidth) * 0.4;
    const panelWidth = panelHeight;
    const panelGap = clientHeight * 0.1;
    const panelXMargin = 0.5 * (clientWidth - panelWidth);

    const panelProps: PanelProps = {
        height: panelHeight,
        width: panelWidth,
        yGap: panelGap,
        xMargin: panelXMargin,
    }

    const [yScroll, setYScroll] = useState(0);
    const [yScrollPercent, setYScrollPercent] = useState(0);

    const activePanel = Math.floor(yScroll / (panelHeight + panelGap));

    const handleScroll = () => {
        const yScroll = window.scrollY;
        const relativeYScroll = yScroll % (panelHeight + panelGap);
        const yScrollPercent = 100 * relativeYScroll / panelHeight
        const element = document.getElementById("debug");
        element!.style.marginTop = yScroll + "px";
        setYScroll(yScroll);
        setYScrollPercent(yScrollPercent);
    } 

    useEffect(() => {
            window.addEventListener("scroll", handleScroll);
            return () => {
                window.removeEventListener("scroll", handleScroll);
            };
    }, []);

    return (
        <div>
            <div className="timeline-text main-header">
                <div>The Big Day</div>
            </div>
            <div className="debug-scroll" id="debug">{yScrollPercent}</div>
            <AnimationPanel 
                sprites={[scroll, quill, scrollA, scrollE]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={0}/>
            
            <div className="timeline-text">
                <div className="head" >Signing Registry</div>
                <div className="sub">Killin Registry Office</div>
                <div className="sub">12:00</div>
                <div className="sub2">Bride, Groom + witnesses only</div>
            </div>

            <AnimationPanel 
                sprites={[castle, tree, heart, ringR2, ringL, ringR1 ]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={1}/>
           
            <div className="timeline-text">
                    <div className="head" >Ceremony</div>
                    <div className="sub">Finlarig Estate</div>
                    <div className="sub">13:00</div>
            </div>

            <AnimationPanel 
                sprites={[cameraTop1, cameraTop2, cameraBottom, cameraL, cameraR, cameraInner, cameraOuter, cameraFlash]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={2}/>

            <div className="timeline-text">
                    <div className="head" >Photographs</div>
                    <div className="sub">Finlarig Estate</div>
                    <div className="sub">13:45</div>
            </div>
            
            <AnimationPanel 
                sprites={[drinks]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={3}/>
            
            <div className="timeline-text">
                    <div className="head" >Drinks Reception</div>
                    <div className="sub">House at Bridge of Lochay</div>
                    <div className="sub">14:00</div>
            </div>

            <AnimationPanel 
                sprites={[]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={4}/>
           
            <div className="timeline-text">
                    <div className="head" >Dinner</div>
                    <div className="sub">House at Bridge of Lochay</div>
                    <div className="sub">18:00</div>
            </div>

            <AnimationPanel 
                sprites={[]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={5}/>
           
            <div className="timeline-text">
                    <div className="head" >Dancing</div>
                    <div className="sub">House at Bridge of Lochay</div>
                    <div className="sub">20:00</div>
            </div>
            
        </div>
    )
}
