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
import { days, times } from '../../data/constantsEngPol';
import { Seedling } from "./Seedling"

export function Home(props: {family: Family, guests: Guest[], setActiveGuest: (guest: Guest | undefined) => void, languageIndex: 0 | 1}) {

    const dispatch = useAppDispatch();
    const arrival = useAppSelector(selectUserFamilyArrival);
    const [showArrivalModal, setShowArrivalModal] = useState(false);
    
    const arrivalDay = mapToLanguagePair(arrival?.arrivalDay);
    const arrivalTime = mapToLanguagePair(arrival?.arrivalTime);
    const departureDay = mapToLanguagePair(arrival?.departureDay);
    const departureTime = mapToLanguagePair(arrival?.departureTime);

    const arrivalStrings = {
        arrival: ["You're arriving", "Przyjeżdżasz w"],
        departure: ["You're leaving", "Wyjeżdżasz w"]
    }

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
                <p>House at the Bridge of Lochay</p>
                <p>Killin, Scotland</p>
            </div>
            <div className="sub-home">
                <div className="horizontal-bar"/>
                {
                    arrival?.arrivalDay &&
                        <div className="med-info col-info">
                            <div className="selected-arrival">
                                <span>{arrivalStrings.arrival[props.languageIndex]} {arrivalDay[props.languageIndex]} {arrivalTime[props.languageIndex]}</span>
                                <span className="info-edit" onClick={() => setShowArrivalModal(true)}><FontAwesomeIcon icon={faEdit}/></span>
                            </div>
                            <div className="selected-arrival">
                                <span>{arrivalStrings.departure[props.languageIndex]} {departureDay[props.languageIndex]} {departureTime[props.languageIndex]}</span>
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
            <Seedling/>
        </div>
    )
}

function mapToLanguagePair(value: String | undefined): String[] {
    switch (value) {
        case "Friday":
            return days.friday;
        case "Saturday":
            return days.saturday;
        case "Sunday":
            return days.sunday;
        case "Monday":
            return days.monday;
        case "Morning":
            return times.morning;
        case "Noon":
            return times.noon;
        case "Afternoon":
            return times.afternoon;
        case "Evening":
            return times.evening;
        default:
            return [""];
    }
}