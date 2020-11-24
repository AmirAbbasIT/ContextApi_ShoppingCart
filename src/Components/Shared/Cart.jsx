import React,{useContext} from 'react'
import {cartContext} from '../../cart';
const Cart = () => {
    const {cart,count}=useContext(cartContext);
    console.log(cart,count);
    return (
        <div>
            <h1>Products in Cart</h1>
        </div>
    )
}

export default Cart
