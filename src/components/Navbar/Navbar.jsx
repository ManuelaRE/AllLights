import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingBasket, faHome } from "@fortawesome/free-solid-svg-icons";
import styles from './Navbar.module.scss'
import { Link } from "@reach/router";
import logo from '../../assets/logo.svg'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <img src={logo}></img>
            <h1>All Lights</h1>
            <div className={styles.navbar_icons}>
                <Link to="/">
                    <FontAwesomeIcon icon={faHome} className={styles.navbar_icon} />
                </Link>
                <Link to="/shoppingCart">
                    <FontAwesomeIcon icon={faShoppingBasket} className={styles.navbar_icon}/>
                </Link>
            </div>
        </div>
    )
}

export default Navbar
