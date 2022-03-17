import diamond from "../../assets/logos/diamond-white-AE.svg"
import { Guest } from "../../models/Guest"
import { GuestDropDown } from "../common/GuestDropDown"
import { useAppDispatch, useAppSelector } from "../../store/hooks"
import { changePageUser } from "../nagivation/NavigationSlice"
import { selectUserFamilyArrival } from "../user/userSlice"
import { useState } from "react"
import { SubmitArrivalTimeModal } from "./arrivals/SubmitArrivalTimeModal"
import { Family } from "../../models/Family"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEdit } from "@fortawesome/free-solid-svg-icons"

export function Home(props: {family: Family, guests: Guest[], setActiveGuest: (guest: Guest | undefined) => void, isPolish: boolean}) {

    const dispatch = useAppDispatch();
    const arrival = useAppSelector(selectUserFamilyArrival);
    const [showArrivalModal, setShowArrivalModal] = useState(false);

    const redirectToMeal = (guestId: string) => {
        const guest = props.guests.find(guest => guest.id === guestId);
        props.setActiveGuest(guest);
        // eslint-disable-next-line
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
                    arrival?.arrivalDay &&
                        <div className="med-info col-info">
                            <div className="selected-arrival">
                                <span>You're arriving {arrival.arrivalDay} {arrival.arrivalTime}</span>
                                <span className="info-edit" onClick={() => setShowArrivalModal(true)}><FontAwesomeIcon icon={faEdit}/></span>
                            </div>
                            <div className="selected-arrival">
                                <span>You're leaving {arrival.departureDay} {arrival.departureTime}</span>
                                <span className="info-edit" onClick={() => setShowArrivalModal(true)}><FontAwesomeIcon icon={faEdit}/></span>
                            </div>       
                        </div>
                }
                {
                    !arrival?.arrivalDay &&
                    <div className="med-info">
                        <span>Let us know when you plan to arrive</span>
                        <span className="info-edit" onClick={() => setShowArrivalModal(true)}><FontAwesomeIcon icon={faEdit}/></span>
                    </div>

                }
                {
                    showArrivalModal &&
                    <SubmitArrivalTimeModal setIsVisible={setShowArrivalModal} {...props}/>
                }
            </div>
        </div>
    )
}
