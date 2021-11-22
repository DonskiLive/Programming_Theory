import React, { useState, useEffect } from 'react';
import Loader from './Loader';
import Error from './Error';
import Meal from './Meal';
import FoodApi from '../data';
import Navigation from './Navigation';

const Meals = ({ match }) => {
    const [loading, setLoading] = useState(true);
    const [meals, setMeals] = useState([]);
    const [error, setError] = useState(null)

    const category = match.params.category

    useEffect(() => {
        setLoading(true);
        setError(null)
        FoodApi.getMealsByCategory(category)
            .then(data => {
                setTimeout(() => {
                    console.log(data)
                    if(data.meals){
                    setLoading(false);
                    setMeals(data.meals)
                    }else{
                        setError('no such category');
                        setLoading(false)
                    }}, 1000)
                })
            .catch((error) => {
                setLoading(false);
                setError(error.message)
            })
    },[category])

    const renderMeals = () => {
        return loading && !error ? <Loader /> : error ? <Error message={error} /> :
            meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
    }



    return (
        <div className ='container'>
            <Navigation />
            <h2 className ='text-primary text-center my-5'>{category}</h2>
        <div className='row'>
            {renderMeals()}
        </div>
        </div>)


}

export default Meals