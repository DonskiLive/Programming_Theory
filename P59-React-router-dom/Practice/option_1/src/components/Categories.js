import Loader from "./Loader"
import React, { useContext, useState, useEffect } from 'react';
import Error from "./Error";
import Category from "./Category"
import FoodApi from "../data"
import { CategoryContext } from "../App"

const Categories = () => {
	const context = useContext(CategoryContext)
	const [loading, setLoading] = useState(true)
	const [categories, setCategories] = useState([])
	const [error, setError] = useState(null)
	const [input, setInput] = useState('')


	useEffect(() => {
		FoodApi.getCategories()
			.then(data => {
				setTimeout(() => { setLoading(false); setCategories([...data.categories]) }, 2000)
			})
			.catch((error) => {
				setLoading(false)
				setError(error.message)
			})
	}, [input])

	function renderCategories() {
		return (
			<>
				{loading ? <Loader /> : error ? <Error message={error} /> :
					categories.map(category => <Category key={category.idCategory} category={category} />)}
			</>
		)
	}

	const inputHandler = (e) => {
		setInput(e.target.value)
	}

	const onKeyDownHandler = (e) => {
		if (e.key === 'Enter') { onClickHandler() }
	}

	const onClickHandler = () => {
		const inputField = document.querySelector('.category-input')
		if (input.trim()) {
			const formattedInput = input.slice(0, 1).toUpperCase() + input.slice(1).toLowerCase()
			if (categories.find(category => category.strCategory === formattedInput)) {
				context.changeCategory(formattedInput)
			} else { alert('The category you wrote was not found! Enter another one or select from the available') }
			inputField.value = ''
			setInput('')
		} else {
			alert('Before starting search process, you have to write category')
			inputField.value = ''
			setInput('')
		}
	}


	return (
		<>
			<h2 className="row justify-content-center">Select a meal category, or write it inside search field:</h2>
			<div className="w-50 input-group mb-3 mx-auto">
				<input type="text" onChange={inputHandler} onKeyDown={(e) => { onKeyDownHandler(e) }} className="form-control category-input" placeholder="write category of meal" aria-label="Recipient's username" aria-describedby="button-addon2" />
				<button onClick={onClickHandler} className="btn btn-outline-secondary" type="button" id="button-addon2">Search</button>
			</div>
			<div className="row justify-content-center border border-secondary rounded overflow-scroll" style={{height: "300px"}}>
				{renderCategories()}
			</div>
		</>
	)
}

export default Categories