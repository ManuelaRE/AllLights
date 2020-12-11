import React from 'react'
import { Router } from "@reach/router";
import Home from '../../components/Home'
import ShoppingBag from '../../components/ShoppingBag'

const Routes = (props) => {
    const {inventory, addToBasket, count, setCount, cart} = props;

    return (
        <Router>
            <Home path="/" inventory={inventory} addToBasket={addToBasket} setCount={setCount} count={count}/>
            <ShoppingBag path="/shoppingCart" cart={cart} count={count} setCount={setCount}/>
        </Router>
    )
}

export default Routes
