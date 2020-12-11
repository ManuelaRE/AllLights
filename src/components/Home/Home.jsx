import React, { useContext } from 'react'
import CardItems from '../CardItems';
import styles from './Home.module.scss';
import Navbar from '../Navbar';
import { UserContext } from "../../context/userContext";


const Home = (props) => {
    const {user} = useContext(UserContext);

    const {inventory, addToBasket, setCount} = props;

    return (
        <>
            <Navbar />
            <h1 className={styles.greet}>Welcome, {user}</h1>
            <div className={styles.container}>
                {inventory.map((item) => (
                    <CardItems item={item} key={item.idItem} addToBasket={addToBasket} setCount={setCount}/>
                ))}
            </div>
        </>
    )
}

export default Home
