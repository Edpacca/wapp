import "./home.css"
import diamond from "../../assets/logos/diamond-white-AE.svg"
import { Guest } from "../../models/Guest"
import { GuestDropDown } from "../common/GuestDropDown"
import { useAppDispatch } from "../../store/hooks"
import { changePageUser } from "../nagivation/NavigationSlice"

export function Home(props: {family: string, guests: Guest[], setActiveGuest: (guest: Guest | undefined) => void}) {

    const dispatch = useAppDispatch();
    const redirectToMeal = (guestId: string) => {
        const guest = props.guests.find(guest => guest.id === guestId);
        props.setActiveGuest(guest);
        if (guest != undefined) dispatch(changePageUser('meal'));
    }

    return(
        <div>
        <div className="App-centered">
            <img src={diamond} className="App-logo-homepage" alt="diamond"/>
        </div>
        <GuestDropDown placeholder={props.family} guests={props.guests} selectOption={redirectToMeal}/>
        <div className="home-info">
            <p>16 - 07 - 22</p>
            <p>House at Bridge of Lochay</p>
            <p>Killin, Scotland</p>
        </div>
        </div>
    )
}
