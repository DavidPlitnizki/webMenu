import React from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = (props) =>{

    return(
        <div className={styles.wrapper}>
            <ul className={styles.container} onClick={props.openMenu} >
                <li><Link to="/">Main</Link></li>
                <li><Link to="/Order">Order</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    )
}

Nav.propTypes = {
    openMenu: PropTypes.func.isRequired
}


export default Nav;