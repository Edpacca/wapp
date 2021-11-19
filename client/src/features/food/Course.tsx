import { foodItem } from "../../models/FoodItem"


export function Course(props: { course: string, foodItems: foodItem[], 
    isVegan: boolean, isPolish: boolean}) {
    
    const index = props.isPolish ? 1 : 0;
    const foodItems = props.isVegan 
        ? props.foodItems.filter(option => option.isVegan).map(option => renderOption(option, index, props.course))
        : props.foodItems.map(option => renderOption(option, index, props.course))

    return (
            <div className="course-box">
                <h2>{props.course}</h2>
                <table className="course-table">
                    {foodItems}
                </table>
            </div>
    )
}

function renderOption(option: foodItem, index: number, course: string) {

     return(
        <tr className="course-row">
            <td className="table-data">
                <label className="form-control">
                <input type="radio" name={course} id={option.id} value={option.id}></input>
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
            <td className="table-data">
                <img src={option.img} alt={option.name[index]} className="food-img"/>
            </td>
        </tr>
    )
}