import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faHome } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.scss'
import { Link } from "@reach/router";


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <h1>AllLights</h1>
            <div className={styles.navbar_icons}>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} />
                </Link>
                <Link to="/shoppingCart">
                    <FontAwesomeIcon icon={faShoppingBasket} />
                </Link>
            </div>
        </div>
    )
}

export default Navbar
