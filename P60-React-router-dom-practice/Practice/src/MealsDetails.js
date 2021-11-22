import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import FoodApi from './data';
import Loader from './components/Loader';
import Error from './components/Error';
import Navigation from './components/Navigation';

const MealsDetails = ()=>{

const [loading, setLoad] = useState(true);
const [mealDetails, setMealDetails] = useState(null);
const [error, setError] = useState(null);

const {idMeal} = useParams();

useEffect(()=>{
    FoodApi.getMealById(idMeal)
    .then((data)=>{
        setTimeout(()=>{
            setMealDetails({...data.meals[0]})
            setLoad(false)
        },1000)
    })
    .catch((error)=>{
        setError(error.message)
        setLoad(false)
    })
}, [idMeal])

    return(
        loading ?
                <Loader /> : error ? <Error message={error} /> :         
                        <div className="container">
                            <Navigation />
                            <div className="card my-2 col-8 mx-auto">
                                <img src={mealDetails.strMealThumb} alt={mealDetails.strMeal} />
                                <div className="card-body">
                                    <h2 className="card-title text-primary">{mealDetails.strMeal}</h2>
                                    <h4 className="card-title">
                                        Category: {mealDetails.strCategory}
                                    </h4>
                                    <p className="card-text">Recipe: {mealDetails.strInstructions}</p>
                                    <h5>Main ingredient: {mealDetails.strIngredient1}</h5>
                                </div>
                            </div>
                        </div>
    )
}

export default MealsDetails