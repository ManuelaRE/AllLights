import React, { useState, useEffect } from 'react';
import styles from './ShoppingBag.module.scss'
import FeedbackPanel from '../FeedbackPanel';
import ShoppingBagItems from '../ShoppingBagItems';

const ShoppingBag = (props) => {
    const { count, cart } = props;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateTotal()
    }, []);

    const calculateTotal = () => {
        cart.map(item => (item.price * count)).reduce((prev, next) => setTotal(prev + next))
    }

    const contentJsx = (cart.length === 0) ? (
        <>
            <ShoppingBagItems cart={cart} count={count} total={total}/>
            <h1 className={styles.shoppingBag_total}>Total: £ {total}</h1>
        </>
    ) : (
            <FeedbackPanel
                header="No items in the basket"
                text="Try returning to home and add your favourites in the basket"
            />
        );

    return <section className={styles.shoppingBag}>{contentJsx}</section>
}

export default ShoppingBag;
