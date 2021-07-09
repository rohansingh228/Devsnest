import React from 'react';
import "../styles/CaloriePage.css";
import CalorieBox from './CalorieBox';


const calorieArr = [
    {
        title: "Pizza",
        calories: 55
    },
    {
        title: "Burger",
        calories: 56
    },
    {
        title: "Coke",
        calories: 69
    },
    {
        title: "Browne",
        calories: 500
    },
    {
        title: "Fried Rice",
        calories: 180
    },
    {
        title: "Lassania",
        calories: 90
    },
    {
        title: "Pani Puri",
        calories: 10
    }

];

function CaloriePage() {
    return (
        <div className="page">
            <div className="container">
                {
                    calorieArr.map(element => (
                        <CalorieBox title={element.title} calories={element.calories} />


                    ))
                }
            </div>
        </div>
    )
}

export default CaloriePage
