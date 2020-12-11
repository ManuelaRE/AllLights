import { useState } from 'react';
import './App.module.scss';
import Navbar from './components/Navbar';
import Routes from './containers/routes';
import inventory  from './data/inventory';

function App() {

  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([""]); 
  
  const addToBasket = (product) => {
    setCart([...cart], product)
    console.log("Item added updated")
}


  return (
    <div className="App">
      <Navbar />
      <Routes inventory={inventory} addToBasket={addToBasket} count={count} setCount={setCount} cart={cart}/>
    </div>
  );
}

export default App;
