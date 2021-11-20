import "./home.css"
import diamond from "../../resources/diamond-white.svg"
import { useAppSelector } from "../../app/hooks"
import { selectChoices } from "../food/foodSlice"
import { HomeMealChoices } from "./HomeMealChoices"
import { useState } from "react"


export function Home() {

    const [isChoices, setIsChoices] = useState(false)


    return(
        <div>
        <div className="App-header">
            <img src={diamond} className="App-logo" alt="diamond"/>
            <h1 className="initials">A | E</h1>
        </div>
        <div className="home-info">
            <p>16 - 07 - 22</p>
            <p>House at Bridge of Lochay</p>
            <p>Killin, Scotland</p>
        </div>
        <div className="menu-choices">
            <button className="choices-toggle" onClick={() => setIsChoices(!isChoices)}>&#127869;</button>
            <HomeMealChoices isActive={isChoices}/>
        </div>
        </div>

    )
}
