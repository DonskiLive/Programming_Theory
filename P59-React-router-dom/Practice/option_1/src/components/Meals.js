import Loader from "./Loader"
import React, { useState, useEffect } from 'react'; 
import Error from "./Error";
import Meal from "./Meal";
import FoodApi from "../data"

const MealsF = ({ category }) => {
	const [loading, setLoading] = useState(true)
	const [meals, setMeals] = useState([]) 
	const [error, setError] = useState(null)


	useEffect(() => {
		setLoading(true)
		setError(null)
		FoodApi.getMealsByCategory(category)
			.then(data => {
				setTimeout(() => { setLoading(false); setMeals(data.meals) }, 2000)
			})
			.catch((error) => {
				setLoading(false);
				setError(error.message);
			})
	}, [category])


	const renderMeals = () => {
		return loading && !error ? <Loader /> : error ? <Error /> : meals.map(meal => <Meal key={meal.idMeal} meal={meal} />)
	}

	return (
		<>
			<h3 className="row justify-content-center">Meals from category: {category}</h3>
			<div className="row justify-content-center">
				{renderMeals()}
			</div>
		</>
	)
}

export default MealsF