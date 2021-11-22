import React, { useContext } from 'react'
import { CategoryContext } from "../App"

const Category = ({ category}) => {
	const context = useContext(CategoryContext)
	return (
		<div className="col-6 col-sm-4 col-md-3 border border-primary m-2 rounded">
			<img src={category.strCategoryThumb} className="w-100 rounded p-1" alt="category-img" />
			<button onClick={() => context.changeCategory(category.strCategory)} className="btn btn-outline-primary my-1 w-100">{category.strCategory}</button>
		</div>
	)
}
export default Category