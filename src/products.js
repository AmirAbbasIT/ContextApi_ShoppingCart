import Bike from './assets/bike.jpg';
import Chair from './assets/Chair.jpg';
import Charger from './assets/charger.jpg';
import Diary from './assets/diary.jpg';
import Table from './assets/Table.jpg';
import Watch from './assets/watch.jpg';
import {createContext} from 'react';


const Products = [{
        name: "Elegent Chair",
        price: 28,
        src: Chair
    },
    {
        name: "E Bike from future",
        price: 18,
        src: Bike
    },
    {
        name: "Beatiful Cartoonic Charger",
        price: 13,
        src: Charger
    },
    {
        name: "Beautiful Diary",
        price: 9,
        src: Diary
    },
    {
        name: "Woody Table",
        price: 88,
        src: Table
    },
    {
        name: "Digital Watch",
        price: 12,
        src: Watch
    }
]

export const Context=createContext({});


const ProductContext = (props) => {
    return (
         <Context.Provider value={{Products}}>
             {props.children}
         </Context.Provider>
    )
}
export default ProductContext;
