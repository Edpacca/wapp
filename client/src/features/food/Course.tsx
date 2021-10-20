import { FormControlLabel, Radio, RadioGroup } from "@mui/material"
import { foodItem } from "../../models/foodItem"


export function Course(props: { foodItems: foodItem[], 
    isVegan: boolean, isPolish: boolean}) {
    
    const foodItems = props.isVegan 
        ? props.foodItems.filter(option => option.isVegan).map(option => renderOption(option, props.isPolish))
        : props.foodItems.map(option => renderOption(option, props.isPolish))

    return (
            <div className="course-box">
                <RadioGroup>
                    {foodItems}
                </RadioGroup>
            </div>
    )
}

function renderOption(option: foodItem, isPolish: boolean) {

    const label = 
    <div className="food-label">
        <p>{isPolish ? option.name_polish : option.name}</p>
        <p className="vegan">{option.isVegan ? "(v)" : undefined}</p>
    </div>

    return(
        <div>
            <FormControlLabel value={option.name} control={<Radio />} label={label} />
            <p className="food-description">{isPolish ? option.description_polish : option.description}</p>
        </div>
    )
}