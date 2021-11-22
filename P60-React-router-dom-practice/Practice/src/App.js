import './App.css';
import Categories from './components/Categories';
import Meals from './components/Meals';
import { Switch, Route } from 'react-router-dom';
import MealsDetails from './MealsDetails';



const App = ()=>{
  
  
    return (
      <Switch>
        <Route exact path ="/" component = {Categories} />
        <Route exact path = "/:category" component = {Meals}/>
        <Route path = "/:category/:idMeal" component = {MealsDetails} />
      </Switch>
    )
  
}

export default App;

//without Route

//export const CategoryContext = React.createContext();

/* 

const App = ()=>{
  
  const [category, setCategory] = useState(null)

  const changeCategory = (category) => {
    console.log(category)
    setCategory(category)
  }

  
    return (
      <>
        <CategoryContext.Provider value ={{
          changeCategory,
          category
        }}>
          <div className='container my-5'>
            <Categories />
          </div>
        </CategoryContext.Provider>
        <div className='container my-5'>
          {category? <Meals category={category} /> : null}
        </div>
      </>
    )
  
} */