import React from 'react'
import { Router } from "@reach/router";
import Home from '../../components/Home'
import ShoppingBag from '../../components/ShoppingBag'

const Routes = (props) => {
    const {inventory, addToBasket, count, setCount, cart} = props;


    return (
        <Router>
            <Home path="/" inventory={inventory} addToBasket={addToBasket} count={count} setCount={setCount} />
            <ShoppingBag path="/shoppingCart" count={count} cart={cart}/>
        </Router>
    )
}

export default Routes
