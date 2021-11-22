import React from 'react';
import './Cart.css';
import { connect } from 'react-redux'
import { clearCart, removeItemFromCart, setOrder } from '../../../store/ActionCreator';

const Cart = ({ cart, deleteFromCart, order, clear, totalPrice, orderCount }) => {

    return (
        cart.length === 0 ? <div className='cart__title'>
            Cart is empty
        </div>
            :
            <div className='cart'>
                <div className='cart__title'>Your order: </div>
                <div className='cart__list'>
                    {
                        cart.map(item => {
                            const { price, title, url, id, count } = item
                            return (
                                <div key={id} className='cart__item'>
                                    <img src={url} className='cart__item-img' alt={title} />
                                    <div className='cart__item-title'>{title}</div>
                                    <div className='cart__item-price'>{count}</div>
                                    <div className='cart__item-price'>{price * count}</div>
                                    <div className='cart__close'
                                        onClick={() => deleteFromCart(id)}>&times;</div>
                                </div>
                            )
                        })
                    }
                </div>
                <button type="button" className='order' data-bs-toggle="modal" data-bs-target="#order"
                    onClick={() => order(generateOrder(cart))}>Order</button>

                <div className="modal fade" id="order" tabIndex="-1" aria-labelledby="order" aria-hidden="true">
                    <div className="modal-dialog">
                        <div className="modal-content">
                            <div className="modal-header">
                                <h5 className="modal-title" id="exampleModalLabel">Your order &#8470;: {orderCount} </h5>
                                <button type="button" className="btn-close" data-bs-dismiss="modal" 
                                    aria-label="Close"
                                    onClick = {clear}
                                ></button>
                            </div>
                            <div className="modal-body">
                               {cart.map((item)=>
                                   <div key = {item.id}>
                                       <p>{item.title}</p>
                                       <p>Quantity: {item.count}</p>
                                       <p>{item.price * item.count}</p>
                                   </div>
                               )}
                               <hr/>
                               <p>Total: {totalPrice}</p>
                            </div>                   
                            <div className="modal-footer">
                                <p>Thank's for your order!</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    );
};

const mapStateToProps = ({ cart, totalPrice, orderCount }) => {
    return {
        cart,
        totalPrice,
        orderCount
    }
}


const mapDispatchToProps = dispatch => {
    return {
        deleteFromCart: (id) => dispatch(removeItemFromCart(id)),
        order: (order) => dispatch(setOrder(order)),
        clear: () => dispatch(clearCart())
    }
}

const generateOrder = (cart) => {
    const order = cart.map(item => {
        return {
            title: item.title,
            count: item.count,
            price: item.price
        }
    })
    return order
}


export default connect(mapStateToProps, mapDispatchToProps)(Cart);