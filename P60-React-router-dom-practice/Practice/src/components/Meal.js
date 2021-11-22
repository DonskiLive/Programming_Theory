import {Link, useParams} from 'react-router-dom';


const Meal = ({ meal }) => {
    const {category} = useParams();

    return (
        <Link className="col-lg-3 col-md-4 col-6 mb-2 d-flex align-items-stretch"
               to = {`/${category}/${meal.idMeal}`}>
            <div className="card mb-2" >
                <img src={meal.strMealThumb} className="card-img-top" alt={meal.strMeal} />
                <div className="card-body" >
                    <h5 className="card-title">{meal.strMeal}</h5>
                </div>
            </div>
        </Link>
    )
}

export default Meal