import React from 'react'
import styles from './ShoppingBagItems.module.scss';


const ShoppingBagItems = (props) => {
    const { cart, count } = props;
    
    const getBasket = () => {
        cart.map((item) => (
            <div className={styles.shoppingBag} key={item.strName}>
                <img src={item.image} alt={item.strName}></img>
                <div className={styles.shoppingBag_details}>
                    <h1>{item.strName}</h1>
                    <h2>Quantity: {count}</h2>
                </div>
                <h3>£ {item.price}</h3>
            </div>
        ))
    }
    return (
        {getBasket}
    )
}

export default ShoppingBagItems
