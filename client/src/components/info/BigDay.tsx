import { ScrollAnimation } from "./ScrollAnimation";
import leaf from '../../assets/icons/leaf-solid.svg';
import { castle, tree, heart, ringL, ringR } from "./Sprites";

export function BigDay() {

    const clientHeight = document.documentElement.clientHeight;
    const panelCount = 3;

    return (
        <div>
            <div className="text-header">
                <h2>The Big Day</h2>
                <p>Scroll through the plan</p>
            </div>

            <div className="animation-panel">
                <h2>Ceremony</h2>
                <div>
                    <div className="castle-wrap"><ScrollAnimation props={castle} panel={{ index: 0, max: panelCount }} maxHeight={clientHeight}/></div>
                    <div className="tree-wrap"><ScrollAnimation props={tree} panel={{ index: 0, max: panelCount }} maxHeight={clientHeight}/></div>
                    <div className="heart-wrap"><ScrollAnimation props={heart} panel={{ index: 0, max: panelCount }} maxHeight={clientHeight}/></div>
                    <div className="ringL-wrap"><ScrollAnimation props={ringL} panel={{ index: 0, max: panelCount }} maxHeight={clientHeight}/></div>
                    <div className="ringR-wrap"><ScrollAnimation props={ringR} panel={{ index: 0, max: panelCount }} maxHeight={clientHeight}/></div>
                </div>
            </div>

            <div className="animation-panel">
                <h2>Afternoon Reception</h2>
                <div className="heart-wrap anim-wrap"><ScrollAnimation props={heart}  panel={{ index: 1, max: panelCount }} maxHeight={clientHeight}/></div>
            </div>

            <div className="animation-panel">
                <h2>Evening Reception</h2>
            </div> 
        </div>
    )
}