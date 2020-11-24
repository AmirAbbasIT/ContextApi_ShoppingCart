import React,{useContext,useReducer} from 'react';
import {Context} from '../../products';
import Product from './Product';

const Products = () => {
    const {Products,dispatch}=useContext(Context);
    console.log(Products,dispatch);
    return (
        <div className="row cards mt-4">
            {
                Products.map((p,index)=>(
                    <Product key={index} product={p}/>
                ))
            }
        </div>
    )
}

export default Products
