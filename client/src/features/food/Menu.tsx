import { Course } from './Course';
import './menu.css';
import { starters, mains, desserts } from '../../data/menuData';
import { useState, Dispatch, SetStateAction } from 'react';
import { Switches } from './Switches';

export function Menu() {

    const [isVegan, setIsVegan ] = useState(false);
    const [isPolish, setIsPolish ] = useState(false);

    function handleChange(setBool: Dispatch<SetStateAction<boolean>>, bool: boolean) {
        setBool(!bool);
    }

    return (
        <div className="menu-wrapper">
            <div className="menu-header">For Dinner</div>
            <Switches
                isVegan={isVegan}
                handleChangeVegan={() => handleChange(setIsVegan, isVegan)}
                isPolish={isPolish}
                handleChangePolish={() => handleChange(setIsPolish, isPolish)}
            />
            <div className="course-wrapper">
                <Course course={"Starter"} foodItems={starters} isVegan={isVegan} isPolish={isPolish}/>
                <Course course={"Main Course"} foodItems={mains} isVegan={isVegan} isPolish={isPolish}/>
                <Course course={"Dessert"} foodItems={desserts} isVegan={isVegan} isPolish={isPolish}/>
            </div>
        </div>

    )
}