import styles from './food.module.css'
import { Course, MenuCourse } from './Course';
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

    function updateActiveGuestCourse(value: number | undefined, param: Course ) {
        if (activeGuest) {
            const guest: Guest = { ...activeGuest };
            switch (param) {
                case 'starter':
                    guest.starter = value;
                    break;
                case 'main':
                    guest.main = value;
                    break;
                case 'dessert':
                    guest.dessert = value;
                    break;
                default:
                    break;
            }

            setActiveGuest(guest);
        }
    }

    function updateDiet(value: string) {
        if (activeGuest) {
            const guest: Guest = { ...activeGuest };
            guest.diet = value;
            setActiveGuest(guest);
        }
    }

    return (
        <div className="menu-wrapper">
            <div className="menu-header">For Dinner</div>
            <div className="guest-choices-top">
                {renderDropDown(guests)}
                <p>Active guest: {activeGuest?.name}</p>

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
                        <MenuCourse courseTitle={"Starter"} course={'starter'} foodItems={starters} isVegan={isVegan} isPolish={isPolish} choice={activeGuest.starter} setChoice={updateActiveGuestCourse}/>
                        <MenuCourse courseTitle={"Main Course"} course={'main'} foodItems={mains} isVegan={isVegan} isPolish={isPolish} choice={activeGuest.main} setChoice={updateActiveGuestCourse}/>
                        <MenuCourse courseTitle={"Dessert"} course={'dessert'} foodItems={desserts} isVegan={isVegan} isPolish={isPolish} choice={activeGuest.dessert} setChoice={updateActiveGuestCourse}/>
                        <textarea className="textarea" placeholder={activeGuest.diet !== undefined && (activeGuest.diet as string).length > 0 ? activeGuest.diet : "Enter any dietary requirements here"} onChange={(e) => updateDiet(e.target.value)}/>
                    </div>
                    <div className='choices'>
                    <strong>{activeGuest.name}'s choices...</strong>
                        {renderChoices(activeGuest, isPolish ? 1 : 0, allChoicesMade(activeGuest))}
                    </div>
                </div>
            }

        </div>
    )
}

function renderChoices(guest: Guest, languageIndex: 1 | 0, ready: boolean) {
    return (
        <div>
            {renderChoice(starters, guest.starter, languageIndex, chosenTexts.starter, "starter")}
            {renderChoice(mains, guest.main, languageIndex, chosenTexts.main, "main")}
            {renderChoice(desserts, guest.dessert, languageIndex, chosenTexts.dessert, "dessert")}
            {
                ready &&
                <div>
                    <p>Excellent decisions {guest.name}.</p>
                </div>
            }
            {guest.diet === undefined ? <p className="vegan">{chosenTexts.diet[0]}</p> : <span><p className="vegan">{chosenTexts.diet[1]}</p>{guest.diet !== undefined && (guest.diet as string).length > 0 ? guest.diet : "None"}</span>}

            <p className="smalltext">Are you ready to submit? You can change your mind up until 1st July 2022</p>
            <button className="button">Submit Choices</button>
        </div>
    )
}

function renderChoice(course: foodItem[], choice: number | undefined, languageIndex: number,
    texts: string[], courseName: string) {

    if (choice !== undefined) {
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


function allChoicesMade(guest: Guest): boolean {
    return (
        guest.starter !== undefined && 
        guest.main !== undefined &&     
        guest.dessert !== undefined
    )
}
