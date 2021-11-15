import "./home.css"
import diamond from "../../resources/diamond-white.svg"

export function Home() {
    return(
        <div className="App-header">
            <img src={diamond} className="App-logo" alt="diamond"/>
        </div>
    )
}