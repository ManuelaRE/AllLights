import React, { useState, useEffect, useContext } from 'react';
import styles from './ShoppingBag.module.scss'
import FeedbackPanel from '../FeedbackPanel';
import ShoppingBagItems from '../ShoppingBagItems';
import Navbar from '../Navbar';
import { UserContext } from "../../context/userContext";

const ShoppingBag = (props) => {
    const {user} = useContext(UserContext);
    const { cart } = props;
    const [total, setTotal] = useState(0);

    useEffect(() => {
        calculateTotal()
    }, [cart]);

    const calculateTotal = () => {
        if(cart.length === 0) return 0;
        return setTotal(cart.map((item) => item.price * item.quantity).reduce((prev, next) => prev + next));
    }

    const contentJsx = (cart.length > 0) ? (
        <>
            <Navbar />
            <h1 className={styles.greet}>Complete your purchase, {user}</h1>
            <ShoppingBagItems cart={cart} total={total} />
            <h1 className={styles.shoppingBag_total}>Total: £ {total}</h1>
        </>
    ) : (
        <>
            <Navbar />
            <FeedbackPanel
                header="No items in the basket"
                text="Try returning to home and add your favourites in the basket"
            />
        </>
        );

    return <section className={styles.shoppingBag}>{contentJsx}</section>
}

export default ShoppingBag;
