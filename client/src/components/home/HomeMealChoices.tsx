import { foodItem } from "../../models/FoodItem";
import { starters, mains, desserts } from "../../data/menuData"
import { useAppSelector } from "../../app/hooks";
import { selectGuests } from "../user/userSlice";
import { useState } from "react";

export function HomeMealChoices(
    props: {isActive: boolean}) {

    const guests = useAppSelector(selectGuests);
    const [activeGuest, setActiveGuest] = useState(0);

    return(
        <div>
            {
                props.isActive &&
                <div>
                    {renderChoice(starters, guests[activeGuest].starter, 1, "starter")}
                    {renderChoice(mains, guests[activeGuest].main, 1, "main")}
                    {renderChoice(desserts, guests[activeGuest].dessert, 1, "dessert")}
                </div>
            }
        </div>
    )
}


function renderChoice(course: foodItem[], choice: number | undefined, languageIndex: number,
    courseName: string) {

    const courseTitle = capitaliseFirst(courseName);

    if (choice === undefined) {
        return (
        <div className="menu-choice">
            <span className="">
                {`No ${courseName} chosen.`}
            </span>
        </div>)
        }
    return (
    <div className="menu-choice">
        <span className="">
            {`${courseTitle} - ${course[choice as number].name[languageIndex]}`}
        </span>
    </div>)

}

function capitaliseFirst(input: string) {
    return input.charAt(0).toUpperCase() + input.slice(1)
}