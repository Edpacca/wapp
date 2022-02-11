import { foodItem } from "../../models/FoodItem"

export type Course = 'starter' | 'main' | 'dessert';

export function MenuCourse(props: { courseTitle: string, course: Course, foodItems: foodItem[], 
    isVegan: boolean, isPolish: boolean, choice: number | undefined, setChoice: (choice: number | undefined, param: Course) => void}) {
    
    const index = props.isPolish ? 1 : 0;
    const foodItems = props.foodItems
        .filter(option => props.isVegan ? option.isVegan : option)
        .map(option => 
            renderOption(option, index, props.course, option.value === props.choice,
                () => props.setChoice(option.value, props.course), ))

    return (
            <div className="course-box">
                <h2>{props.courseTitle}</h2>
                <table className="course-table">
                    {foodItems}
                </table>
                {
                    props.choice !== undefined &&
                    <button className="cancel" onClick={() => props.setChoice(undefined, props.course)}>&#10007;</button>
                }
            </div>
    )
}

function renderOption(option: foodItem, index: number, course: Course,  isSelected: boolean, setChoice: (choice: number | undefined, param: Course) => void,) {

     return(    
        <div className="course-wrapper">
            <tr className="course-row">
                <td className="table-data" key={option.name[0]}>
                    <label className="form-control">
                        <input type="radio" 
                            name={course} id={`${course}${option.value}`} 
                            value={option.value} onChange={() => setChoice(option.value, course)} checked={isSelected}>
                        </input>
                    </label>
                </td>
                <td className="table-data">
                    <span className="food-name">
                        <p>{option.name[index]}</p>
                        <p className="vegan">{option.isVegan ? "(v)" : undefined}</p>
                    </span>
                </td>
                {/* <td className="table-data">
                    <p className="food-description">{option.description[index]}</p>
                </td> */}
                {/* <td className="table-data">
                    <img src={option.img} alt={option.name[index]} className="food-img"/>
                </td> */}
            </tr>
        </div>
    )
}
