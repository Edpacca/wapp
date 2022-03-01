import { faLeaf } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

export function WappSwitch(props: {isFlag: boolean, handleChange: () => void, 
    sliderClass: string, switchClass: string}) {
    return(
        <div className={props.switchClass}>
            <div className="inline">
                <label className="switch">
                    {/* <FontAwesomeIcon icon={faLeaf} size="2x" color="yellowgreen" className="switch-icon"/> */}
                    <input type="checkbox" checked={props.isFlag} onChange={() => props.handleChange()}/>
                    <span className={props.sliderClass}></span>
                </label>
            </div>
        </div>
    )
}