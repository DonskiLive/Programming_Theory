import React, {useEffect, useState} from 'react';
import Loader from './Loader';
import Error from './Error';
import Category from './Category';
import FoodApi from '../data';
import CategoryInput from './CateoryInput';

export default function Categories(){
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])
    const [error, setError] = useState(null)
   
    useEffect(()=>{
        FoodApi.getCategories()
            .then(data => {
                setTimeout(() => { 
                    setCategories([...data.categories])
                    setLoading(false)
                }, 1000)
            })
            .catch((error) => {
                setError(error.message)
                setLoading(false)
            })
    },[])

    

    const renderCategories =()=> {
        return (
  
            <>
            <CategoryInput />
                {loading ?
                    <Loader /> : error ? <Error message={error} /> :
                        categories.map(category => <Category key={category.strCategory} category={category} />)}
            </>
       
        )
    }


   
        return (
            <div className ='container'>
                <h2 className = 'text-center text-primary my-5'>Our categories of meals</h2>
            <div className='row'>
                {renderCategories()}
            </div>
            </div>
        )
    

}