import React, { useReducer, useEffect } from 'react';
import styles from './CardItems.module.scss'

const CardItems = (props) => {
    const { strName, image, strDescription, price } = props.item;
    const {setCount, item, addToBasket } = props;
    const initialState = { count: 0 };




    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                console.log('increment was called')
                return { count: state.count + 1 };
            case ('decrement'):
                return (state.count > 0) ?  { count: state.count - 1 }: {count: 0} ;
            default:
                throw new Error();
        }
    }

    function Counter() {
        const [state, dispatch] = useReducer(reducer, initialState);
        return (
            <div className={styles.card_basket}>
                <button onClick={() => { dispatch({ type: 'decrement'}); setCount(state.count) }}> - </button>
                <span>{state.count}</span>
                <button onClick={() => { dispatch({ type: 'increment' }); setCount(state.count) }}> + </button>
            </div>
        )
    }



    return (
        <div className={styles.card}>
            <img src={image} alt={strName}></img>
            <div className={styles.card_description}>
                <h1>{strName}</h1>
                <h2>{strDescription}</h2>
                <h3>£ {price}</h3>
                {Counter()}
                <button onClick={() => addToBasket(item)}>Add to basket</button>
            </div>
        </div>
    )
}

export default CardItems
