import './App.css';
import React from 'react'
import Categories from './components/Categories';
import Meals from './components/Meals';
import { useState } from 'react';

export const CategoryContext = React.createContext()

const App =()=>{ 
  const [currentCategory, setCurrentCategory] = useState(null)

  function changeCategory (selectedCategory){
    setCurrentCategory(selectedCategory)
  }
    return (
      <> <CategoryContext.Provider value={{
            changeCategory: changeCategory
          }}>
        <div className="container my-5">
        <Categories />
          
        </div></CategoryContext.Provider>
        <div className="container my-5">
          {currentCategory ? <Meals category = {currentCategory}/> : null}
        </div>
      </>
    );
}

export default App