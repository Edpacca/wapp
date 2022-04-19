import { foodItem } from "../../models/FoodItem"
import { CourseType } from "../../models/Course";

export function MenuCourse(props: {
    course: CourseType, courses: { title: string, foodItems: foodItem[] }[], isVegan: boolean, languageIndex: 0 | 1 }) {
    
    return (
            <div className={`course-sheet bkg-${props.course}`}>
                {
                    props.courses.map(course => 
                        <>
                            <h2>{course.title}</h2>
                            <div className="set-course-wrapper">
                                { 
                                    course.foodItems.map(item => {
                                        if (props.isVegan) {
                                            return item.isVegan ? renderOption(item, props.languageIndex) : <></>
                                        }
                                        else {
                                            return renderOption(item, props.languageIndex);
                                        }
                                    })
                                }
                            </div>
                        </>
                    )
                }
            </div>
    )
}

function renderOption(option: foodItem, languageIndex: 1 | 0) {
        return (
            <div className="set-course">
                <span>
                    {option.name[languageIndex]} {option.isVegan ? <span className="vegan-option">(v)</span> : ""}
                    <span className="food-description">
                        <br/>{option.description[languageIndex]}
                    </span>
                </span>
            </div>
        )
}