export function Switches(props: {isVegan: boolean, handleChangeVegan: () => void, isPolish: boolean, handleChangePolish: () => void}) {
    return(
        <div>
        <div className="vegan-switch">
            <div className="inline">
                <label className="switch">
                    <input type="checkbox" checked={props.isVegan} onChange={() => props.handleChangeVegan()}/>
                    <span className="slider"></span>
                </label>
                <p className="vegan">Vegan</p>
            </div>
        </div>
        <div className="polski-switch">
            <div className="inline">
            <label className="switch">
                <input type="checkbox" checked={props.isPolish} onChange={() => props.handleChangePolish()}/>
                <span className="slider-polski"></span>
            </label>
                <p className="polski">Polski</p>
            </div>
        </div>
    </div>
    )
}