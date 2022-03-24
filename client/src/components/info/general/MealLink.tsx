import { useAppDispatch } from "../../../store/hooks"
import { changePageUser } from "../../nagivation/NavigationSlice";

export function MealLink() {
    const dispatch = useAppDispatch();

    return (
        <div>
            <button onClick={() => dispatch(changePageUser('meal'))}>Choose Meal</button>
        </div>
    )
}