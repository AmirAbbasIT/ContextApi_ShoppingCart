import {Provider} from 'react';
import './App.css';
import { Nav } from './Components/Shared/Nav';
import ProductContext from './products';
import CartContextProvider from './cart';
import Products from './Components/Shared/Products';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import Cart from './Components/Shared/Cart';
function App() {
  return (
    <>
    <div className="container">
    
      <ProductContext>
        <CartContextProvider>
        <Router>
      <Nav/>
        <Switch>
          <Route exact path='/' component={Products} />
          <Route path='/products' component={Products}/>
          <Route path='/cart' component={Cart} />
        </Switch>
      </Router>
        </CartContextProvider>
      </ProductContext>
    </div>

    </>
  );
}

export default App;
