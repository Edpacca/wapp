export function WappSwitch(props: {isFlag: boolean, 
    handleChange: () => void, 
    text: string, textClass: string, 
    sliderClass: string, 
    switchClass: string}) {
    return(
        <div className={props.switchClass}>
            <div className="inline">
                <label className="switch">
                    <input type="checkbox" checked={props.isFlag} onChange={() => props.handleChange()}/>
                    <span className={props.sliderClass}></span>
                </label>
                <p className={props.textClass}>{props.text}</p>
            </div>
        </div>
    )
}