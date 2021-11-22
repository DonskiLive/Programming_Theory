import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
//import { CategoryContext } from '../App';

const Category = ({ category }) => {
    //const context = useContext(CategoryContext)
    return (
        <Link className='col-6 col-sm-4 col-md-3 d-flex align-items-strech text-decoration-none'
                to ={`/${category.strCategory}`}>
            <div className='card text-center my-2'>
                <img src={category.strCategoryThumb} alt = {category.strCategory} />
                <div className='card-body'>
                    <h3 className='card-title'>
                        {category.strCategory}
                    </h3>
                </div>
            </div>
        </Link>
    )
}

export default Category