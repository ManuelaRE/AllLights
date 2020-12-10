import React, {useState} from 'react';
import styles from './CardItems.module.scss'

const CardItems = (props) => {
const {strName, image, strDescription, price, quantityInBasket} = props.item;
const {addToBasket, addNumberofItems} = props;

const [count, setCount] = useState(quantityInBasket);

const reduceCount = () => {
    if(count > 0) {
        setCount(prevCount => prevCount - 1);
    }
    
}

const increaseCount = () => {
    setCount(prevCount => prevCount + 1);
}



    return (
        <div className={styles.card}>
            <img src={image} alt="lamp"></img>
            <div className={styles.card_description}>
                <h1>{strName}</h1>
                <h2>{strDescription}</h2>
                <h3>£ {price}</h3>
                <div className={styles.card_basket}>
                    <button onClick={reduceCount}>-</button>
                    <span>{count}</span>
                    <button onClick={increaseCount}>+</button>
                </div>
                <button onClick={() => {
                    addToBasket(); 
                    addNumberofItems(count);
                }
                }>Add to basket</button>
            </div>
            
        </div>
    )
}

export default CardItems