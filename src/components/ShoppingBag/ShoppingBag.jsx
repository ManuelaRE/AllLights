import React, { useState, useEffect } from 'react';
import styles from './ShoppingBag.module.scss'
import FeedbackPanel from '../FeedbackPanel';
import ShoppingBagItems from '../ShoppingBagItems';

const ShoppingBag = (props) => {
    const { inventory } = props;
    const [favourites, setFavourites] = useState(inventory.filter(item => item.inBasket));
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateTotal()
    }, [])

    const calculateTotal = () => {
        favourites.map(item => (item.price * item.quantityInBasket)).reduce((prev, next) => setTotal(prev + next))
    }
    
    
    // const basketItems = favourites.map((item) => (
    //     <ShoppingBagItems item={item} key={item.idItem} />
    // ))

    // const contentJsx = favourites.length ? (
    //     {basketItems}
    // ) : (
    //         <FeedbackPanel
    //             header="No items in the basket"
    //             text="Try returning to home and add your favourites in the basket"
    //         />
    //     );

        // return <section className={styles.shoppingBag}>{contentJsx}</section>
    return (
        <div className={styles.shoppingBag}>
            {favourites.map((item) => (
                <ShoppingBagItems item={item} key={item.idItem} />
            ))}
            <h1 className={styles.shoppingBag_total}>Total: £ {total}</h1>
        </div>
        )
}

export default ShoppingBag
