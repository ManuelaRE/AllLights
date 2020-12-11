import { useState } from 'react';
import './App.module.scss';
import Routes from './containers/routes';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { UserProvider } from "./context/userContext";

import inventory from './data/inventory';

toast.configure();
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
    toast("Item added to the basket!")
  }


  return (
    <UserProvider>
      <ToastContainer />
      <div className="App">
        <Routes inventory={inventory} addToBasket={addToBasket} cart={cart} setCount={setCount} />
      </div>
    </UserProvider>

  );
}

export default App;