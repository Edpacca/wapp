import styles from './food.module.css'
import { Course } from './Course';
import './menu.css';
import { starters, mains, desserts, chosenTexts } from '../../data/menuData';
import { useState, Dispatch, SetStateAction } from 'react';
import { WappSwitch } from './WappSwitch';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Choices } from '../../models/Choices';
import { foodItem } from '../../models/FoodItem';
import { Guest } from '../../models/Guest';
import { GuestListChoices } from './guestListChoicese';
import { selectUserGuests } from '../login/userSlice';

export type GuestParameter = 'starter' | 'main' | 'dessert' | 'diet';

export function Menu() {

    const guests = useAppSelector(selectUserGuests);
    const [isVegan, setIsVegan ] = useState(false);
    const [isPolish, setIsPolish ] = useState(false);
    const [activeGuest, setActiveGuest] = useState<Guest | undefined>(undefined);
    const dispatch = useAppDispatch();

    function handleChange(setBool: Dispatch<SetStateAction<boolean>>, bool: boolean) {
        setBool(!bool);
    }

    function selectActiveGuestById(id: string) {
        const guest = guests.find(g => g.id === id);
        if (guest) setActiveGuest(guest);
        else setActiveGuest(undefined);
    }

    function renderDropDown(guests: Guest[]) {
        return (
            <select className={styles.guestDropDown} onChange={(e) => selectActiveGuestById(e.target.value)}>
                <option className={styles.guestOption}>Select Guest</option>
                {guests.map(guest => <option 
                className={styles.guestOption} 
                key={guest.id} value={guest.id}
                >{guest.name}</option>)}
            </select>
        )
    }

    function updateGuestParameter(value: number | string | undefined, param: GuestParameter) {
        if (activeGuest) {
            const guest: Guest = activeGuest;

            switch (param) {
                case 'starter':
                    guest.starter = value ? value as number : undefined;
                    break;
                case 'main':
                    guest.main = value ? value as number : undefined;
                    break;
                case 'dessert':
                    guest.dessert = value ? value as number : undefined;
                    break;
                case 'diet':
                    guest.diet = value ? value as string : undefined;
                    break;
                default:
                    break;
            }

            setActiveGuest(guest);
        }
    }

    return (
        <div className="menu-wrapper">
            <div className="menu-header">For Dinner</div>
            <div className="guest-choices-top">
                {renderDropDown(guests)}
            </div>
            <div className="switches">
                <WappSwitch
                    isFlag={isVegan}
                    handleChange={() => handleChange(setIsVegan, isVegan)}
                    text="Filter vegan"
                    textClass="vegan"
                    switchClass="vegan-switch"
                    sliderClass="slider"/>
                <div className="right-float">
                    <WappSwitch
                        isFlag={isPolish}
                        handleChange={() => handleChange(setIsPolish, isPolish)}
                        text="Polski"
                        textClass="polski"
                        switchClass="polski-switch"
                        sliderClass="slider-polski"/>
                </div>
            </div>

            {
                activeGuest &&
                <div className="courses-wrapper">
                    <div >
                        <Course courseTitle={"Starter"} course={"starter"} foodItems={starters} isVegan={isVegan} isPolish={isPolish} choice={activeGuest.starter} setChoice={updateGuestParameter}/>
                        <Course courseTitle={"Main Course"} course={"main"} foodItems={mains} isVegan={isVegan} isPolish={isPolish} choice={activeGuest.main} setChoice={updateGuestParameter}/>
                        <Course courseTitle={"Dessert"} course={"dessert"} foodItems={desserts} isVegan={isVegan} isPolish={isPolish} choice={activeGuest.dessert} setChoice={updateGuestParameter}/>
                        <textarea className="textarea" placeholder="Enter any dietary requirements here" onChange={(e) => updateGuestParameter(e.target.value, 'diet')}/>
                    </div>
                    <div>
                    Your choices...
                        {/* {renderChoices(choices, isPolish ? 1 : 0, allChoicesMade())} */}
                    </div>
                </div>
            }

        </div>
    )
}

function renderChoices(choices: Choices, languageIndex: 1 | 0, ready: boolean) {
    return (
        <div className="choices">
            {renderChoice(starters, choices.starter, languageIndex, chosenTexts.starter, "starter")}
            {renderChoice(mains, choices.main, languageIndex, chosenTexts.main, "main")}
            {renderChoice(desserts, choices.dessert, languageIndex, chosenTexts.dessert, "dessert")}
            {choices.diet === undefined ? <p className="vegan">{chosenTexts.diet[0]}</p> : <span><p className="vegan">{chosenTexts.diet[1]}</p>{choices.diet}</span>}
            {
                ready &&
                <div>
                    <p>Excellent decisions.</p>
                </div>
            }
            <p className="smalltext">Are you ready to submit? You can change your mind up until 1st July 2022</p>
            <button className="button">Submit Choices</button>
        </div>
    )
}

function renderChoice(course: foodItem[], choice: number | undefined, languageIndex: number,
    texts: string[], courseName: string) {

    if (choice) {
    return (
        <div className="choice">
            <span className="inline">
                {texts[0] + course[choice as number].name[languageIndex] + texts[1]}
            </span>
        </div>
    )}
    return (
        <div className="choice">
            <span className="inline error">
                {`No ${courseName} chosen.`}
            </span>
        </div>
    )
}


function allChoicesMade(guest: Guest) {
    return (
        guest.starter?.toString() && 
        guest.main?.toString() && 
        guest.dessert?.toString()
    )
}
