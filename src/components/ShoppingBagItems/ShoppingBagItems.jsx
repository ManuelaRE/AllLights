import React from 'react'
import styles from './ShoppingBagItems.module.scss';


const ShoppingBagItems = (props) => {
    const { cart } = props;

    const getBasket = () => {

        return cart.map((item,i) => (
            <div className={styles.shoppingBag} key={item.strName}>
                <img src={item.image} alt={item.strName}></img>
                <div className={styles.shoppingBag_details}>
                    <h1>{item.strName}</h1>
                    <h2>Quantity: {item.quantity}</h2>
                </div>
                <h3>£ {item.price * item.quantity}</h3>
            </div>
        ))
    }
    return (
        <>
            {getBasket()}
        </>
        

    )
}

export default ShoppingBagItems
