import { useAppDispatch } from "../../app/hooks";
import { foodItem } from "../../models/FoodItem"

export function Course(props: { courseTitle: string, course: string, foodItems: foodItem[], 
    isVegan: boolean, isPolish: boolean, choice: number | undefined}) {
    
    const dispatch = useAppDispatch();
    const setCourse = (course: string, value: number | undefined) => 
    {
        dispatch({
            type: `food/${course}Selected`, 
            payload: value})
    }

    const index = props.isPolish ? 1 : 0;
    const foodItems = props.foodItems
        .filter(option => props.isVegan ? option.isVegan : option)
        .map(option => 
            renderOption(option, index, props.course, 
                () => setCourse(props.course, option.value), option.value === props.choice))

    return (
            <div className="course-box">
                <h2>{props.courseTitle}</h2>
                <table className="course-table">
                    {foodItems}
                </table>
                {
                    props.choice !== undefined &&
                    <button className="cancel" onClick={() => setCourse(props.course, undefined)}>&#10007;</button>
                }
            </div>
    )
}

function renderOption(option: foodItem, index: number, course: string, onClick: () => void, isSelected: boolean) {

     return(
        <div className="course-wrapper">
            <tr className="course-row">
                <td className="table-data">
                    <label className="form-control">
                        <input type="radio" 
                            name={course} id={`${course}${option.value}`} 
                            value={option.value} onChange={onClick} checked={isSelected}>
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
