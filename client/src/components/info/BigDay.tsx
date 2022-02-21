import { ScrollAnimation } from "./ScrollAnimation";
import { 
    scroll, quill, scrollA, scrollE, 
    castle, tree, heart, ringL, ringR1, ringR2,
    cameraTop1, cameraTop2, cameraBottom, cameraL, cameraR, cameraInner, cameraOuter

} from "./Sprites";
import { Panel } from "../../models/ScrollAnimationProps";

export function BigDay() {

    const clientHeight = document.documentElement.scrollHeight;
    const maxPanels = 3;
    const panelHeight = clientHeight * 0.7;
    const panel0: Panel = {index: 0, max: maxPanels, height: panelHeight}
    const panel1: Panel = {index: 1, max: maxPanels, height: panelHeight}
    const panel2: Panel = {index: 2, max: maxPanels, height: panelHeight}
    const panel3: Panel = {index: 3, max: maxPanels, height: panelHeight}

    return (
        <div>
            {/* <div className="text-header">
                <h2>The Big Day</h2>
                <p>Scroll through the plan</p>
            </div> */}

            <div className="animation-panel">
                <div className="timeline-text">
                    <div className="head" >Signing Registry</div>
                    <div className="sub">Killin Registry Office</div>
                    <div className="sub">12:00</div>
                    <div className="sub2">Bride, Groom + witnesses only</div>
                </div>
                <div>
                <div className="scroll-wrap"><ScrollAnimation props={scroll} panel={panel0} pageHeight={clientHeight}/></div>
                <div className="quill-wrap"><ScrollAnimation props={quill} panel={panel0} pageHeight={clientHeight}/></div>
                <div className="letters-wrap"><ScrollAnimation props={scrollA} panel={panel0} pageHeight={clientHeight}/></div>
                <div className="letters-wrap"><ScrollAnimation props={scrollE} panel={panel0} pageHeight={clientHeight}/></div>
                </div>
            </div>

            <div className="animation-panel">
                <div className="timeline-text">
                    <div className="head" >Ceremony</div>
                    <div className="sub">Finlarig Estate</div>
                    <div className="sub">13:00</div>
                </div>
                <div>
                    <div className="castle-wrap"><ScrollAnimation props={castle} panel={panel1} pageHeight={clientHeight}/></div>
                    <div className="tree-wrap"><ScrollAnimation props={tree} panel={panel1} pageHeight={clientHeight}/></div>
                    <div className="ring-wrap"><ScrollAnimation props={ringR2} panel={panel1} pageHeight={clientHeight}/></div>
                    <div className="ring-wrap"><ScrollAnimation props={ringL} panel={panel1} pageHeight={clientHeight}/></div>
                    <div className="ring-wrap"><ScrollAnimation props={ringR1} panel={panel1} pageHeight={clientHeight}/></div>
                    <div className="heart-wrap"><ScrollAnimation props={heart} panel={panel1} pageHeight={clientHeight}/></div>
                </div>
            </div>

            <div className="animation-panel">
                <div className="timeline-text">
                    <div className="head" >Photographs</div>
                    <div className="sub">Finlarig Estate</div>
                    <div className="sub">13:45</div>
                </div>
                <div>
                 <div className="camera-wrap"><ScrollAnimation props={cameraTop1} panel={panel2} pageHeight={clientHeight}/></div>
                 <div className="camera-wrap"><ScrollAnimation props={cameraTop2} panel={panel2} pageHeight={clientHeight}/></div>
                 <div className="camera-wrap"><ScrollAnimation props={cameraBottom} panel={panel2} pageHeight={clientHeight}/></div>
                 <div className="camera-wrap"><ScrollAnimation props={cameraL} panel={panel2} pageHeight={clientHeight}/></div>
                 <div className="camera-wrap"><ScrollAnimation props={cameraR} panel={panel2} pageHeight={clientHeight}/></div>
                 <div className="camera-wrap"><ScrollAnimation props={cameraInner} panel={panel2} pageHeight={clientHeight}/></div>
                 <div className="camera-wrap"><ScrollAnimation props={cameraOuter} panel={panel2} pageHeight={clientHeight}/></div>
                </div>
            </div>

            <div className="animation-panel">
                <div className="timeline-text">
                    <div className="head" >Drinks Reception</div>
                    <div className="sub">House at Bridge of Lochay</div>
                    <div className="sub">14:00</div>
                </div>
            </div>

            <div className="animation-panel">
                <div className="timeline-text">
                    <div className="head" >Ceremony</div>
                    <div className="sub">Finlarig Estate</div>
                    <div className="sub">13:00</div>
                </div>
                {/* <div className="heart-wrap"><ScrollAnimation props={heart}  panel={{ index: 1, max: panelCount }} pageHeight={clientHeight}/></div> */}
            </div> 
        </div>
    )
}
