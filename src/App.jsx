import { useState, useEffect } from 'react';
import styles from './App.module.scss';
import Navbar from './components/Navbar';
import Routes from './containers/routes';
import inventory  from './data/inventory';

function App() {

  const [count, setCount] = useState(0);
  const [cart, setCart] = useState([]); 
  
  const addToBasket = (product) => {
    setCart([...cart, product])
    console.log("Item added updated")
}

  useEffect(() => {
    console.log('Count has been changed in app component')
    console.log(count);
  }, [count])


  return (
    <div className="App">
      <Navbar />
      <Routes inventory={inventory} addToBasket={addToBasket}  cart={cart} count={count} setCount={setCount}/>
    </div>
  );                                               
}

export default App;