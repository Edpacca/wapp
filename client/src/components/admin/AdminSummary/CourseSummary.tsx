import { foodItem } from "../../../models/FoodItem";

export function CourseSummary(props: {foodItem: foodItem, total: number}) {
    return (
        <div className="courses">
            <span className="total">[{props.total}]</span> &nbsp; {props.foodItem.name[0]}  
        </div>
    )
}