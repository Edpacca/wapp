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
import { selectGuests } from '../login/userSlice';

const initialChoices: Choices = {
    starter: undefined,
    main: undefined,
    dessert: undefined,
    diet: undefined
}

export function Menu() {

    const [isVegan, setIsVegan ] = useState(false);
    const [isPolish, setIsPolish ] = useState(false);
    const guests = useAppSelector(selectGuests);
    const [activeGuest, setActiveGuest] = useState<Guest | undefined>(undefined);
    const [choices, setChoices] = useState<Choices>(initialChoices);
    const dispatch = useAppDispatch();

    function handleChange(setBool: Dispatch<SetStateAction<boolean>>, bool: boolean) {
        setBool(!bool);
    }

    function onTextChange(text: string) {
        const payload = text.length === 0 ? undefined : text
        dispatch({type: "users/dietSelected", payload: payload})
    }

    function handleSelectNewGuest(guest: Guest) {
        setActiveGuest(guest);
        setChoices({
            starter: guest.starter,
            main: guest.main,
            dessert: guest.dessert,
            diet: guest.diet
        })
    }

    function allChoicesMade(): boolean {
            return activeGuest 
            ? (activeGuest.starter !== undefined &&
               activeGuest.main !== undefined &&
               activeGuest.dessert !== undefined) 
            : false;
    }

    return (
        <div className="menu-wrapper">
            <div className="guest-choices-top">
                <GuestListChoices 
                    guests={guests}
                    setActiveGuest={handleSelectNewGuest}
                />
            </div>
            <div className="menu-header">For Dinner</div>
            <div>Selecting for {activeGuest?.name}</div>
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
                        <Course courseTitle={"Starter"} course={"starter"} foodItems={starters} isVegan={isVegan} isPolish={isPolish} choice={choices.starter}/>
                        <Course courseTitle={"Main Course"} course={"main"} foodItems={mains} isVegan={isVegan} isPolish={isPolish} choice={choices.starter}/>
                        <Course courseTitle={"Dessert"} course={"dessert"} foodItems={desserts} isVegan={isVegan} isPolish={isPolish} choice={choices.starter}/>
                        <textarea className="textarea" placeholder="Enter any dietary requirements here" onChange={(e) => onTextChange(e.target.value)}/>
                    </div>
                    <div>
                    Your choices...
                        {renderChoices(choices, isPolish ? 1 : 0, allChoicesMade())}
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
