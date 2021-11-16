import "./home.css"
import diamond from "../../resources/diamond-white.svg"

export function Home() {
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
        </div>

    )
}