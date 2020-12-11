import { useState } from 'react';
import './App.module.scss';
import Routes from './containers/routes';

import { UserProvider } from "./context/userContext";

import inventory from './data/inventory';

function App() {

  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]);

  const addToBasket = (product, quantity) => {
    if (product.quantity) {
      product.quantity++;
    } else {
      product.quantity = quantity;
      setCart([...cart, product])
    }
  }


  return (
    <UserProvider>
      <div className="App">
        <Routes inventory={inventory} addToBasket={addToBasket} cart={cart} setCount={setCount} />
      </div>
    </UserProvider>

  );
}

export default App;