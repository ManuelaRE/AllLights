import React from 'react'
import { Router } from "@reach/router";
import Home from '../../components/Home'
import ShoppingBag from '../../components/ShoppingBag'

const Routes = (props) => {
    const {inventory} = props;
    const {inBasket, quantityInBasket} = props.inventory;


    const addToBasket = () => {
        inventory.inBasket = !inBasket;
    }

    const addNumberofItems = (number) => {
        inventory.quantityInBasket = number;
    }



    return (
        <Router>
            <Home path="/" inventory={inventory} addToBasket={addToBasket} addNumberofItems={addNumberofItems}/>
            <ShoppingBag path="/shoppingCart" inventory={inventory}/>
        </Router>
    )
}

export default Routes
