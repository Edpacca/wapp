import { Course, MenuCourse } from './Course';
import { starters, mains, desserts, chosenTexts } from '../../data/menuData';
import { useState, Dispatch, SetStateAction } from 'react';
import { WappSwitch } from '../common/WappSwitch';
import { useAppDispatch } from '../../store/hooks';
import { foodItem } from '../../models/FoodItem';
import { Guest } from '../../models/Guest';
import { submitGuestUpdateUser } from '../user/userSlice';
import { SubmitGuestChoiceModal } from './SubmitGuestChoiceModal';
import { allChoicesMade } from '../../helpers/allChoicesMade';
import { GuestDropDown } from '../common/GuestDropDown';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleRight } from '@fortawesome/free-solid-svg-icons';

export function Menu(props: {family: string, guests: Guest[], activeGuest: Guest | undefined, languageIndex: 0 | 1}) {

    const guests = props.guests;
    const [isVegan, setIsVegan ] = useState(false);
    const [activeGuest, setActiveGuest] = useState<Guest | undefined>(props.activeGuest);
    const [showSubmit, setShowSubmit] = useState<Boolean>(false);
    const dispatch = useAppDispatch();

    const textSelectGuest = props.languageIndex ? "Wybierz gościa" : "Select guest";
    const textIsChoosing = props.languageIndex ? "wybierasz..." : "is choosing..."
    const textDietaryRequirements = props.languageIndex ? "Wpisz tutaj wszelkie wymagania dietetyczne" : "Enter any dietary requirements here";

    function handleChange(setBool: Dispatch<SetStateAction<boolean>>, bool: boolean) {
        setBool(!bool);
    }

    function selectActiveGuestById(id: string) {
        const guest = guests.find(g => g.id === id);
        if (guest) setActiveGuest(guest);
        else setActiveGuest(undefined);
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

    function submitGuestChoices() {
        if (activeGuest) dispatch(submitGuestUpdateUser(activeGuest));
        setShowSubmit(false);
        setActiveGuest(undefined);
    }

    return (
        <div className="menu-wrapper">
            <div>
                <GuestDropDown placeholder={textSelectGuest} guests={guests} selectOption={selectActiveGuestById} />
                <div className='text-header'>
                    <h2>À la Carte</h2>
                    { activeGuest && <p>{activeGuest?.name} {textIsChoosing}</p> }
                </div>
            </div>
            <div className="switches">
                <div>
                    <WappSwitch
                        isFlag={isVegan}
                        handleChange={() => handleChange(setIsVegan, isVegan)}
                        switchClass="vegan-switch"
                        sliderClass="slider"/>
                    <p className='slider-label'>Vegan</p>
                </div>
            </div>
            {
                activeGuest && showSubmit &&
                <SubmitGuestChoiceModal guest={activeGuest} languageIndex={props.languageIndex} setIsVisible={setShowSubmit} submit={submitGuestChoices} />
            }
            {
                activeGuest &&
                <div>
                    <div className="courses-wrapper">
                        <MenuCourse courseTitle={"Starter"} course={'starter'} foodItems={starters} isVegan={isVegan} languageIndex={props.languageIndex} choice={activeGuest.starter} setChoice={updateActiveGuestCourse}/>
                        <MenuCourse courseTitle={"Main Course"} course={'main'} foodItems={mains} isVegan={isVegan} languageIndex={props.languageIndex} choice={activeGuest.main} setChoice={updateActiveGuestCourse}/>
                        <MenuCourse courseTitle={"Dessert"} course={'dessert'} foodItems={desserts} isVegan={isVegan} languageIndex={props.languageIndex} choice={activeGuest.dessert} setChoice={updateActiveGuestCourse}/>
                        <textarea placeholder={activeGuest.diet && (activeGuest.diet as string).length > 0 ? "Diet: " + activeGuest.diet : textDietaryRequirements} onChange={(e) => updateDiet(e.target.value)}/>
                    </div>
                    <div>
                    
                        {renderChoices(activeGuest, props.languageIndex, allChoicesMade(activeGuest), setShowSubmit)}
                    </div>
                </div>
            }

        </div>
    )
}

function renderChoices(guest: Guest, languageIndex: 1 | 0, ready: boolean, setShowSubmit: (b: boolean) => void) {
    const textExcellentDecisions = languageIndex ? "Doskonałe decyzje" : "Excellent decisions"
    const textNone = languageIndex ? "Nic" : "None";
    const textSubmit = languageIndex ? "Składać" : "Submit"

    return (
        <div className='choice-slab'>
            <div className='choice-head'>{ languageIndex ? `Wybory ${guest.name}` : `${guest.name}'s choices...`}</div>
            {renderChoice(starters, guest.starter, languageIndex, chosenTexts.starter, "starter")}
            {renderChoice(mains, guest.main, languageIndex, chosenTexts.main, "main")}
            {renderChoice(desserts, guest.dessert, languageIndex, chosenTexts.dessert, "dessert")}
            {
                ready &&
                <div>
                    <p>{textExcellentDecisions} {guest.name}.</p>
                </div>
            }
            {guest.diet === undefined ? <p className="green choice">{chosenTexts.diet[0 + (2 * languageIndex)]}</p> : <span className="green"><p>{chosenTexts.diet[1 + (2 * languageIndex)]}</p>{guest.diet && (guest.diet as string).length > 0 ? guest.diet : textNone}</span>}
            {
                languageIndex === 0 
                ? <p className="smalltext">Are you ready to submit? <br/> You can change your mind up until 1st July</p>
                : <p className="smalltext">Czy jesteś gotowy, aby zgłosić swoje wybory?<br/> Możesz zmienić zdanie do 1 Lipca</p>
            }
            <button onClick={() => setShowSubmit(true)}>{textSubmit} &nbsp; <FontAwesomeIcon icon={faAngleRight}/></button>
        </div>
    )
}

function renderChoice(course: foodItem[], choice: number | undefined, languageIndex: number,
    texts: string[], courseName: string) {
    
    // eslint-disable-next-line
    if (choice != undefined) {
    return (
        <div className="choice">
            <span className="inline">
                {texts[0 + (2 * languageIndex)] + course[choice as number].name[languageIndex] + texts[1 + (2 * languageIndex)]}
            </span>
        </div>
    )}
    return (
        <div className="choice">
            <span className="orange">
                {`No ${courseName} chosen.`}
            </span>
        </div>
    )
}
