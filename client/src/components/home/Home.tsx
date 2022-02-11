import "./home.css"
import diamond from "../../assets/diamond-white-AE.svg"
import { Guest } from "../../models/Guest"
import { LoginStatus } from "../login/LoginStatus"

export function Home(props: {family: string, guests: Guest[]}) {

    return(
        <div>
        <div className="App-centered">
            <img src={diamond} className="App-logo-homepage" alt="diamond"/>
        </div>
        <LoginStatus family={props.family} guests={props.guests}/>
        <div className="home-info">
            <p>16 - 07 - 22</p>
            <p>House at Bridge of Lochay</p>
            <p>Killin, Scotland</p>
        </div>
        </div>
    )
}
