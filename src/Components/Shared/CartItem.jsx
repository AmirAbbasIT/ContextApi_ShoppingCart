import React,{useContext} from "react";
import {cartContext} from '../../cart.js';
const CartItem = (props) => {

    const {product}=props;
    const {cart,dispatch}=useContext(cartContext);

    const RemoveCartItem=(product)=>{
        dispatch({type:"DeleteFromCart",payload:product});
        console.log(cart);
    }
    const IncrementItem=(product)=>{
        dispatch({type:"IncrementItemInCart",payload:product});
    }
    const DecrementItem=(product)=>{
        if(product.quantity>1)
        dispatch({type:"DecrementItemInCart",payload:product});
    }
  return (
    <tr>
        <td>
        <div className="item-detail">
          <img src={product.src} />
          <p>{product.name}</p>
      </div>
        </td>
        <td >
            <p className="item-price">{product.price}$</p>
        </td>
        <td className="item-quantity">
            <button className="btn btn-success" onClick={()=>{IncrementItem(product)}}>+</button>
            <h3>{product.quantity}</h3>
            <button className="btn btn-danger" onClick={()=>{DecrementItem(product)}}>-</button>
        </td>
        <td>
            <button className="btn btn-danger item-delete" onClick={()=>{RemoveCartItem(product)}} >x</button>
        </td>
      
    </tr>
  );
};

export default CartItem;
