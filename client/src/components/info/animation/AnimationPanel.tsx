import { ScrollAnimation } from "./ScrollAnimation";
import { ScrollAnimationProps } from "../../../models/ScrollAnimationProps";
import { PanelProps } from "../../../models/ScrollDimensionProps";

export function AnimationPanel(props: { sprites: ScrollAnimationProps[], panel: PanelProps, 
    yScrollPercent: number, activePanel: number, panelIndex: number }) {

    const isActivePanel = props.activePanel === props.panelIndex;
    
    return (
        <div className="animation-panel">
            <div>
            {
            props.sprites.map(sprite => {
                return <div key={sprite.id} className={`${sprite.id}-wrap`}>
                    <ScrollAnimation 
                        animation={sprite}
                        panel={props.panel}
                        yScrollPercent={props.yScrollPercent}
                        isPanelActive={isActivePanel}
                    />
                </div>    
            })
        }
            </div>
        </div>
    )
}