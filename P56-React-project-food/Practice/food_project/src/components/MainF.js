import { useState } from 'react'
import React from 'react';
import getData from '../store/store';
import MealList from './MealList';
import MealWithComments from './MealWithComments';

export const MealContext = React.createContext();

/* export default function MainF(){ */
const MainF = () => {
    const [meals, setMeals] = useState(getMealsFromJson())
    const [currentMeal, setCurrentMeal] = useState(null)

    const changeCurrentMeal = (id) => {
        /* const newMeals = [...meals] */
        const index = meals.findIndex(meal => meal.idMeal === id)
        const meal = { ...meals[index] };
        setCurrentMeal(meal)
    }

    const showMeals = () => {
        setCurrentMeal(null)
    }

    const addComment = (id, comment) => {
        const newMeals = [...meals]
        const index = newMeals.findIndex(meal => meal.idMeal === id)
        const meal = { ...newMeals[index] };
        const newComments = [...meal.comments];
        newComments.push({ ...comment, id: Date.now(), note: +comment.note })
        meal.comments = newComments;
        meal.rate = (newComments.reduce((sum, comment) => sum += comment.note, 0) / newComments.length).toFixed(1);
        newMeals[index] = meal;
        setMeals(newMeals)
        setCurrentMeal(meal)
    }

    return (
        <MealContext.Provider value={{
            changeCurrentMeal,
            addComment
        }}>
            <div className='container'>
                {currentMeal ?
                    <MealWithComments meal={currentMeal}
                        showMeals={showMeals} /> :
                    <MealList meals={meals} />
                }
            </div>
        </MealContext.Provider>
    )
}

export default MainF

function getMealsFromJson() {
    const meals = JSON.parse(getData()).meals;
    meals.forEach(el => {
        el.comments = [];
        el.rate = 0
    })
    return meals
}