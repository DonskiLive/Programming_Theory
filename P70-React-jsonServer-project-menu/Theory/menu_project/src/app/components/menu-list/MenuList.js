import './MenuList.css';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { getMenu, addItemToCart } from './../../../store/ActionCreator';
import Loader from './../loader/Loader';
import Food from './../../img/big-food.jpg'
import Order from '../order/Order';


function MenuList({menu, isLoading, error, getData, addToCart}) {
  return (
    <>{isLoading ? <Loader /> : <>
      {menu.length === 0 ? <div>
      <h1 className = 'menu__header'>food for every taste</h1>
      <img  src = {Food} className = 'home__img' alt ='food'/>
      <button className = 'load__btn' onClick =  {getData}>View our menu</button>
      </div> : 
      <>
      <h1 className='menu__header'>menu</h1>
      <ul className ='menu__list'>
          {
            menu.map(item =>
              <li className ='menu__item' key = {item.id}>
                <Link to ={`/menu/${item.id}`}>
                  <div className = 'menu__title'>{item.title}</div>
                  <img className = 'menu__img' src = {item.url} alt = {item.title}/>
                  <div className = 'menu__category'>Category: <span>{item.category}</span></div>
                  <div className = 'menu__price'>Price: <span>{item.price} $</span></div>
                  <button className ='menu__btn' onClick = {(e)=>{
                    e.preventDefault()
                    addToCart(item.id)
                  }}>Add to cart</button>
                  <span className = {`menu__category_Img ${item.category}`}></span>
                </Link>
              </li>
              )
          }
      </ul>
      {error && <div style = {{color:'red'}}>{error}</div>}
      </>
      } 
      
    </>}
      <Order />
    </>
  )
};

const mapStateToProps = ({menu, isLoading, error})=>{  
  return{
    menu,
    isLoading,
    error
  }
}

const mapDispatchToProps = dispatch =>{
  return{
    getData: ()=> dispatch(getMenu()),
    addToCart: (id)=>dispatch(addItemToCart(id))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(MenuList);