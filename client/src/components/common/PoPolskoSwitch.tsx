import { WappSwitch } from "./WappSwitch";

export function PoPolskoSwitch(props: {isPolish: boolean, setIsPolish: () => void, styleString?: string}) {
    return (
        <div className={props.styleString}>
            <WappSwitch
                isFlag={props.isPolish}
                handleChange={() => props.setIsPolish()}
                switchClass="polski-switch"
                sliderClass="slider-polski"/>
            <p className='slider-label'>Polski</p>
        </div>
    )
}