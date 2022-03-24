import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { foodItem } from "../../models/FoodItem"
import { faCheck, faXmark } from "@fortawesome/free-solid-svg-icons";

export type Course = 'starter' | 'main' | 'dessert';

export function MenuCourse(props: { 
    courseTitle: string, course: Course, foodItems: foodItem[], 
    isVegan: boolean, languageIndex: 0 | 1, 
    choice: number | undefined, setChoice: (choice: number | undefined, param: Course) => void}) {
    
    return (
            <div className={`course-sheet bkg-${props.course}`}>
                <h2>{props.courseTitle}</h2>
                <div className="course-options-wrapper">
                    {
                        courseOptions(
                            props.course, props.foodItems, props.isVegan, 
                            props.languageIndex, props.choice, props.setChoice)
                    }
                </div>
                {
                    // eslint-disable-next-line
                    props.choice != undefined &&
                    <button className="course-button-cancel" onClick={() => props.setChoice(undefined, props.course)}>
                        <FontAwesomeIcon icon={faXmark} size="2x"/>
                    </button>
                }
            </div>
    )
}

function courseOptions(course: Course, foodItems: foodItem[], isVegan: boolean, index: 1 | 0, 
    choice: number | undefined, setChoice: (choice: number | undefined, param: Course) => void) {
    return (
        foodItems.filter(option => isVegan ? option.isVegan : option)
        // eslint-disable-next-line
        .map(option => {
            // eslint-disable-next-line
            if (choice == undefined) {
                return renderOption(option, index, course, option.value === choice,
                    () => setChoice(option.value, course));
            } else if (choice === option.value) {
                return renderOption(option, index, course, option.value === choice,
                    () => setChoice(option.value, course));
            }
        })
    )
}

function renderOption(option: foodItem, index: number, course: Course,  isSelected: boolean, setChoice: (choice: number | undefined, param: Course) => void,) {
    
    return (
        <>
            <div className="course-option">
                    <button className={`course-button ${isSelected ? 'course-option-selected' : ''}`} onClick={() => setChoice(option.value, course)}>
                            {isSelected && <FontAwesomeIcon icon={faCheck} size="2x" className="course-check"/>}
                    </button>
                    <span>
                        {option.name[index]}
                        <span className="food-description">
                            <br/>{option.description[index]}
                        </span>
                    </span>
            </div>
        </>
    )
}
