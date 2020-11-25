import {createContext} from 'react';
import React,{useContext,useReducer} from 'react'

export const cartContext=createContext();

let count=0;
const initialState={
    cart:[],
    count:0
}

const reducer=(state,action)=>{
    switch(action.type)
    {
        case "AddToCart":
            {
                count=state.cart.length+1;
                return{
                    ...state,
                    count:count,
                    cart:[...state.cart,action.payload]
                }
            }
        case "DeleteFromCart":
            {
                count=state.cart.length-1;
                return{
                    ...state,
                    count:count,
                    cart:state.cart.filter(item=>item!==action.payload)
                }
            }    
        case "IncrementItemInCart":
            {
                let updatedproduct=action.payload;
                updatedproduct.quantity=updatedproduct.quantity+1;
                console.log(updatedproduct);
                return{
                    ...state,
                    cart:state.cart.map((p)=>(p===action.payload)?updatedproduct:p)
                }
            }    
        case "DecrementItemInCart":
            {
                let updatedproduct=action.payload;
                updatedproduct.quantity=updatedproduct.quantity-1;
                console.log(updatedproduct);
                return{
                    ...state,
                    cart:state.cart.map((p)=>(p===action.payload)?updatedproduct:p)
                }
            }    
        default:
            return state;
    }
}



const CartContextProvider = (props) => {
    const [cart,dispatch]=useReducer(reducer,initialState);
    return (
         <cartContext.Provider value={{cart,dispatch}}>
             {props.children}
         </cartContext.Provider>
    )
}
export default CartContextProvider;
