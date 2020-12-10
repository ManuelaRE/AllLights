import React from 'react'
import CardItems from '../CardItems';
import styles from './Home.module.scss'
const Home = (props) => {

    const {inventory, addToBasket, addNumberofItems} = props;
    return (
        <div className={styles.container}>
            {inventory.map((item) => (
                <CardItems item={item} key={item.idItem} addToBasket={addToBasket} addNumberofItems={addNumberofItems}/>
            ))}
        </div>
    )
}

export default Home
