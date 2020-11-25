import React, {useContext} from "react";
import {cartContext} from '../../cart';

const Product = (props) => {
  const {cart,dispatch}=useContext(cartContext);
  const { product } = props;

  const AddToCart=(product)=>{
    const index=cart.cart.indexOf(product);
    if(index===-1)
    {
      product.quantity=1;
      dispatch({type:"AddToCart",payload:product})
    }
  }
  return (
    <>
      <div className="card col-md-3 product-card">
        <img src={product.src} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">{product.price}$</p>
        </div>
        <div className="card-footer">
          <button className="btn btn-warning btn-block text-white" onClick={()=>{AddToCart(product)}}>add to Cart</button>
        </div>
      </div>
    </>
  );
};

export default Product;
