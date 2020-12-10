import React from 'react'
import styles from './ShoppingBagItems.module.scss';


const ShoppingBagItems = (props) => {
    const { image, strName, quantityInBasket, price } = props.item;


    return (
        <div className={styles.shoppingBag}>
            <img src={image} alt='lamp'></img>
            <div className={styles.shoppingBag_details}>
                <h1>{strName}</h1>
                <h2>Quantity: {quantityInBasket}</h2>
            </div>
        
            <h3>£ {price}</h3>
        </div>
    )
}

export default ShoppingBagItems
