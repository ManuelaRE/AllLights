import React, { useReducer, useEffect } from 'react';
import styles from './CardItems.module.scss'

const CardItems = (props) => {
    const { strName, image, strDescription, price } = props.item;
    const { setCount, item, addToBasket } = props;

    const initialState = { count: 0 };
    const [state, dispatch] = useReducer(reducer, initialState);

    function reducer(state, action) {
        switch (action.type) {
            case 'increment':
                return { count: state.count + 1 };
            case ('decrement'):
                return (state.count > 0) ?  { count: state.count - 1 }: {count: 0} ;
            default:
                throw new Error();
        }
    }
    
    //This is so the count is rendered at the same time as when we increade/decrease the number of items in the basket
    useEffect(() => {
        setCount(initialState.count)
    }, [initialState.count])

    return (
        <div className={styles.card}>
            <img src={image} alt={strName}></img>
            <div className={styles.card_description}>
                <h1>{strName}</h1>
                <h2>{strDescription}</h2>
                <h3>£ {price}</h3>
                <div className={styles.card_basket}>
                    <button onClick={() => { dispatch({ type: 'decrement'}); }}> - </button>
                    <span>{state.count}</span>
                    <button onClick={() => { dispatch({ type: 'increment' }); }}> + </button>
                </div>
                <button onClick={() => addToBasket(item, state.count)}>Add to basket</button>
            </div>
        </div>
    )
}

export default CardItems
