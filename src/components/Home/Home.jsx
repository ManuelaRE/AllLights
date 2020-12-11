import React from 'react'
import CardItems from '../CardItems';
import styles from './Home.module.scss';
import Navbar from '../Navbar';

const Home = (props) => {
    const {inventory, addToBasket, setCount} = props;

    return (
        <>
            <Navbar />
            <div className={styles.container}>
                {inventory.map((item) => (
                    <CardItems item={item} key={item.idItem} addToBasket={addToBasket} setCount={setCount}/>
                ))}
            </div>
        </>
    )
}

export default Home
