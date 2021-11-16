import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { foodItem } from "../../models/FoodItem"


export function Course(props: { foodItems: foodItem[], 
    isVegan: boolean, isPolish: boolean}) {
    
    const index = props.isPolish ? 1 : 0;
    const foodItems = props.isVegan 
        ? props.foodItems.filter(option => option.isVegan).map(option => renderOption(option, index))
        : props.foodItems.map(option => renderOption(option, index))

    return (
            <div className="course-box">
                <RadioGroup>
                    {foodItems}
                </RadioGroup>
            </div>
    )
}

function renderOption(option: foodItem, index: number) {

    const label = 
    <div className="food-label">
        <p>{option.name[index]}</p>
        <p className="vegan">{option.isVegan ? "(v)" : undefined}</p>
    </div>

    return(
        <div>
            <FormControlLabel value={option.name} control={<Radio />} label={label} />
            <p className="food-description">{option.description[index]}</p>
        </div>
    )
}