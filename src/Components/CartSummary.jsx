import React,{useContext,useEffect,useState} from "react";
import {cartContext} from '../cart';

const CartSummary = () => {
    const {cart,dispatch}=useContext(cartContext);
    const [Total,setTotal]=useState(0);
    var total=0;
    useEffect(()=>{
        cart.cart.forEach(item=>{
           total=(total+(item.price*item.quantity));
        })
        setTotal(total);
    },[cart])
    return (
        <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="cart-detail">
                <p>Sub-total <span className="cart-price">${Total}.00</span></p>
                <p>Shipping charges <span className="cart-price" >$3.90</span></p>
            </div>
            <div className="cart-total">
                <h3>Total<span className="cart-price" >${Total}.00</span></h3>
            </div>
            <button className="btn btn-info btn-block cart-checkout">CheckOut</button>
        </div>
    )
}

export default CartSummary
