import React,{useContext,useReducer} from 'react'
import {cartContext} from '../../cart';
import CartSummary from '../CartSummary';
import CartItem from './CartItem';
const Cart = () => {
    const {cart,dispatch}=useContext(cartContext);
    console.log(cart);
    return (
        <div className="row">

            <div className="col-md-8">
                <div className="table table-borderless">
                   
                    <tbody>
                    {cart.cart.map(item=>(<CartItem product={item} />))}
                    </tbody>
                </div>
            
            </div>


            <div className="col-md-4">
            <CartSummary/>
            </div>
        </div>
    )
}

export default Cart
