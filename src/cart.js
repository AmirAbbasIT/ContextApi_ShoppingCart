import {createContext} from 'react';

export const cartContext=createContext();


const CartContextProvider = (props) => {
    return (
         <cartContext.Provider value={{cart:[],count:0}}>
             {props.children}
         </cartContext.Provider>
    )
}
export default CartContextProvider;
