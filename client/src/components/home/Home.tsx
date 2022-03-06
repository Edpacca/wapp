import diamond from "../../assets/logos/diamond-white-AE.svg"
import { Guest } from "../../models/Guest"
import { GuestDropDown } from "../common/GuestDropDown"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { changePageUser } from "../nagivation/NavigationSlice"
import { selectFamilyArrival } from "../user/userSlice"
import { useState } from "react"
import { SubmitArrivalTimeModal } from "./arrivals/SubmitArrivalTimeModal"
import { Family } from "../../models/Family"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

export function Home(props: {family: Family, guests: Guest[], setActiveGuest: (guest: Guest | undefined) => void}) {

    const dispatch = useAppDispatch();
    const arrival = useAppSelector(selectFamilyArrival);
    const [showArrivalModal, setShowArrivalModal] = useState(false);

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
            <GuestDropDown placeholder={props.family.name} guests={props.guests} selectOption={redirectToMeal}/>
            <div className="large-info">
                <p>16 - 07 - 22</p>
                <p>House at Bridge of Lochay</p>
                <p>Killin, Scotland</p>
            </div>
            <div className="sub-home">
                <div className="horizontal-bar"/>
                {
                    arrival &&
                        <div className="med-info col-info">
                            <span>You're arriving around</span>
                            <div className="selected-arrival">
                                <span>{arrival.day} {arrival.time}</span>
                                <span className="info-edit" onClick={() => setShowArrivalModal(true)}><FontAwesomeIcon icon={faEdit}/></span>
                            </div>    
                        </div>
                }
                {
                    !arrival &&
                    <button onClick={() => setShowArrivalModal(true)}>Let us know when you plan to arrive</button>
                }
                {
                    showArrivalModal &&
                    <SubmitArrivalTimeModal family={props.family} setIsVisible={setShowArrivalModal} />
                }
            </div>
        </div>
    )
}
