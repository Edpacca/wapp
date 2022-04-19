import { useEffect, useState } from "react";
import { PanelProps } from "../../../models/ScrollDimensionProps";
import { AnimationPanel } from "./AnimationPanel";
import TimelineInfo from "./TimelineInfo";
import { 
    scroll, quill, scrollA, scrollE, 
    castle, tree, heart, ringL, ringR1, ringR2,
    cameraTop1, cameraTop2, cameraBottom, cameraL, cameraR, cameraInner, cameraOuter, cameraFlash,
    drinks,
    discoball,
    dinnerChandelier, dinnerChairL, dinnerChairR, dinnerTable, dinnerWineC, dinnerWineL, dinnerWineR

} from "./Sprites";
import { BIG_DAY_SCHEDULE } from "../../../data/activityData";
import { useAppDispatch } from "../../../store/hooks";
import { changePageInfo } from "../../nagivation/NavigationSlice";

export function BigDay(props: {languageIndex: 0 | 1}) {

    const dispatch = useAppDispatch();
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
    const textBigDay = ["The Big Day", "Wielki dzień"];
    const dateBigDay = ["16th July 2022", "16 Lipca 2022"]
    const subtextBigDay = ["Scroll through, and tap the titles for more info.", "Przewiń i dotknij tytułów, aby uzyskać więcej informacji."]

    const activePanel = Math.floor(yScroll / (panelHeight + panelGap));

    const handleScroll = () => {
        const yScroll = window.scrollY;
        const relativeYScroll = yScroll % (panelHeight + panelGap);
        const yScrollPercent = 100 * relativeYScroll / panelHeight
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
                <div>{textBigDay[props.languageIndex]}</div>
                <div className="sub">{dateBigDay[props.languageIndex]}</div>
                <div className="sub2">{subtextBigDay[props.languageIndex]}</div>
            </div>
            <AnimationPanel 
                sprites={[scroll, quill, scrollA, scrollE]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={0}/>
            <TimelineInfo activity={BIG_DAY_SCHEDULE[0]} languageIndex={props.languageIndex}/>
            
            <AnimationPanel 
                sprites={[castle, tree, heart, ringR2, ringL, ringR1 ]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={1}/>
           <TimelineInfo activity={BIG_DAY_SCHEDULE[1]} languageIndex={props.languageIndex}/>

            <AnimationPanel 
                sprites={[cameraTop1, cameraTop2, cameraBottom, cameraL, cameraR, cameraInner, cameraOuter, cameraFlash]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={2}/>
            <TimelineInfo activity={BIG_DAY_SCHEDULE[2]} languageIndex={props.languageIndex}/>
            
            <AnimationPanel 
                sprites={[drinks]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={3}/>
            <TimelineInfo activity={BIG_DAY_SCHEDULE[3]} languageIndex={props.languageIndex}/>

            <AnimationPanel 
                sprites={[dinnerChandelier, dinnerTable, dinnerChairL, dinnerChairR,  dinnerWineC, dinnerWineL, dinnerWineR]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={4}/>
           <TimelineInfo activity={BIG_DAY_SCHEDULE[4]} languageIndex={props.languageIndex}/>

            <AnimationPanel 
                sprites={[discoball]}
                panel={panelProps}
                yScrollPercent={yScrollPercent}
                activePanel={activePanel}
                panelIndex={5}/>
           <TimelineInfo activity={BIG_DAY_SCHEDULE[5]} languageIndex={props.languageIndex}/>
           <div className="bottom-margin">
               <button onClick={() => dispatch(changePageInfo('none'))}>Return</button>
           </div>
        </div>
    )
}
