import { useState, useEffect } from 'react';
import './App.module.scss';
import Navbar from './components/Navbar';
import Routes from './containers/routes';
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

  // useEffect(() => {
  // }, [count])

  // useEffect(() => {
  // }, [cart])


  return (
    <div className="App">
      <Navbar />
      <Routes inventory={inventory} addToBasket={addToBasket} cart={cart} setCount={setCount} />
    </div>
  );
}

export default App;