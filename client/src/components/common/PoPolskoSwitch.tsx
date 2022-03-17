import { WappSwitch } from "./WappSwitch";

export function PoPolskoSwitch(props: {isPolish: boolean, setIsPolish: () => void, style?: string}) {
    return (
        <div className={props.style}>
            <WappSwitch
                isFlag={props.isPolish}
                handleChange={() => props.setIsPolish()}
                switchClass="polski-switch"
                sliderClass="slider-polski"/>
            <p className='slider-label'>Polski</p>
        </div>
    )
}