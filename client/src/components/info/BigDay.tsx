
import { useEffect, useState } from "react";
import { PanelProps } from "../../models/ScrollDimensionProps";
import { AnimationPanel } from "./animation/AnimationPanel";
import TimelineInfo from "./animation/TimelineInfo";
import { 
    scroll, quill, scrollA, scrollE, 
    castle, tree, heart, ringL, ringR1, ringR2,
    cameraTop1, cameraTop2, cameraBottom, cameraL, cameraR, cameraInner, cameraOuter, cameraFlash,
    drinks,
    discoball

} from "./animation/Sprites";
import { BIG_DAY_SCHEDULE } from "../../data/activityData";

export function BigDay() {

    const clientHeight = Math.max(document.documentElement.clientHeight, window.innerHeight);
    const clientWidth = Math.min(document.documentElement.clientWidth, window.innerWidth);
    const panelHeight = Math.max(clientHeight, clientWidth) * 0.4;
    const panelWidth = panelHeight;
    const panelGap = clientHeight * 0.10;
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
        // const element = document.getElementById("debug");
        // element!.style.marginTop = yScroll + "px";
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
            <div className="main-header">
                <div>The Big Day</div>
                <div className="sub">16th July 2022</div>
                <div className="sub2">Scroll through, and tap the titles for more info.</div>
            </div>
            {/* <div className="debug-scroll" id="debug">
                <span>{yScrollPercent}</span>
                <br/>
                <span>{activePanel}</span>
                <br/>
                <span>{yScroll}</span>
            </div> */}
            <AnimationPanel 
                sprites={[scroll, quill, scrollA, scrollE]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={0}/>
            <TimelineInfo activity={BIG_DAY_SCHEDULE[0]}  />
            
            <AnimationPanel 
                sprites={[castle, tree, heart, ringR2, ringL, ringR1 ]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={1}/>
           <TimelineInfo activity={BIG_DAY_SCHEDULE[1]}  />

            <AnimationPanel 
                sprites={[cameraTop1, cameraTop2, cameraBottom, cameraL, cameraR, cameraInner, cameraOuter, cameraFlash]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={2}/>
            <TimelineInfo activity={BIG_DAY_SCHEDULE[2]}  />
            
            <AnimationPanel 
                sprites={[drinks]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={3}/>
            <TimelineInfo activity={BIG_DAY_SCHEDULE[3]}  />

            <AnimationPanel 
                sprites={[]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={4}/>
           <TimelineInfo activity={BIG_DAY_SCHEDULE[4]}  />

            <AnimationPanel 
                sprites={[discoball]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={5}/>
           <TimelineInfo activity={BIG_DAY_SCHEDULE[5]}  />
           <div className="bottom-margin"></div>
        </div>
    )
}
