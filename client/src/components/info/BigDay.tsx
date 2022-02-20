import { ScrollAnimation } from "./ScrollAnimation";
import leaf from '../../assets/icons/leaf-solid.svg';
import { castle, tree, heart, ringL, ringR1, ringR2 } from "./Sprites";

export function BigDay() {

    const clientHeight = document.documentElement.scrollHeight;
    const panelCount = 3;

    return (
        <div>
            <div className="text-header">
                <h2>The Big Day</h2>
                <p>Scroll through the plan</p>
            </div>

            <div className="animation-panel">
                <div className="timeline-text">
                    <div className="head" >Ceremony</div>
                    <div className="sub">Finlarig Estate</div>
                    <div className="sub">13:00</div>
                </div>
                <div>
                    <div className="castle-wrap"><ScrollAnimation props={castle} panel={{ index: 0, max: panelCount }} pageHeight={clientHeight}/></div>
                    <div className="tree-wrap"><ScrollAnimation props={tree} panel={{ index: 0, max: panelCount }} pageHeight={clientHeight}/></div>
                    <div className="ring-wrap"><ScrollAnimation props={ringR2} panel={{ index: 0, max: panelCount }} pageHeight={clientHeight}/></div>
                    <div className="ring-wrap"><ScrollAnimation props={ringL} panel={{ index: 0, max: panelCount }} pageHeight={clientHeight}/></div>
                    <div className="ring-wrap"><ScrollAnimation props={ringR1} panel={{ index: 0, max: panelCount }} pageHeight={clientHeight}/></div>
                    <div className="heart-wrap"><ScrollAnimation props={heart} panel={{ index: 0, max: panelCount }} pageHeight={clientHeight}/></div>
                </div>
            </div>

            <div className="animation-panel">
                <div className="timeline-text">
                    <div className="head" >Photographs</div>
                    <div className="sub">Finlarig Estate</div>
                    <div className="sub">13:45</div>
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