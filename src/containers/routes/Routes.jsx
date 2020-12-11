import React from 'react'
import { Router } from "@reach/router";
import Home from '../../components/Home'
import ShoppingBag from '../../components/ShoppingBag'

const Routes = (props) => {
    const {inventory, addToBasket, setCount, cart} = props;

    return (
        <Router>
            <Home path="/" inventory={inventory} addToBasket={addToBasket} setCount={setCount}/>
            <ShoppingBag path="/shoppingCart" cart={cart} />
        </Router>
    )
}

export default Routes
