import "./home.css"
import diamond from "../../assets/diamond-white-AE.svg"

export function Home() {

    return(
        <div>
        <div className="App-centered">
            <img src={diamond} className="App-logo-homepage" alt="diamond"/>
        </div>
        <div className="home-info">
            <p>16 - 07 - 22</p>
            <p>House at Bridge of Lochay</p>
            <p>Killin, Scotland</p>
        </div>
        </div>
    )
}
