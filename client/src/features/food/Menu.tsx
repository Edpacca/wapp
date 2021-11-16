import { Course } from './Course';
import './menu.css';
import { starters, mains, desserts } from '../../data/menuData';
import { useState, Dispatch, SetStateAction } from 'react';
import { Switch } from '@mui/material';

export function Menu() {

    const [isVegan, setIsVegan ] = useState(false);
    const [isPolish, setIsPolish ] = useState(false);

    function handleChange(setBool: Dispatch<SetStateAction<boolean>>, bool: boolean) {
        setBool(!bool);
    }

    return (
        <div className="menu-wrapper">
            <div className="menu-header">For Dinner</div>
            <div className="switches">
                <div className="switch">
                    <Switch
                        checked={isVegan}
                        onChange={() => handleChange(setIsVegan, isVegan)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p className="vegan">Vegan</p>
                </div>
                <div className="switch">
                    <Switch
                        checked={isPolish}
                        onChange={() => handleChange(setIsPolish, isPolish)}
                        inputProps={{ 'aria-label': 'controlled' }}
                    />
                    <p>Polski</p>
                </div>
            </div>

            <div className="course-wrapper">
                <Course foodItems={starters} isVegan={isVegan} isPolish={isPolish}/>
                <Course foodItems={mains} isVegan={isVegan} isPolish={isPolish}/>
                <Course foodItems={desserts} isVegan={isVegan} isPolish={isPolish}/>
            </div>
        </div>

    )
}