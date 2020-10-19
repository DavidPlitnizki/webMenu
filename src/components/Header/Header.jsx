import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import MenuIcon from '../Icons/MenuIcon';
import { Link } from 'react-router-dom';
import {useAuth} from '../../hooks/auth.hook';

const Header = ({ openMenuCallback, menuState}) => {
    const {isAuth} = useAuth();
    const isAuthenticated = !!isAuth;

    return (
        <div className={styles.container}>
            <MenuIcon openMenu={openMenuCallback} menuState={menuState} />
            <div className={styles.logo}></div>
            <div className={styles.user_info}>
            {
                // (isAuthenticated) ?
                //     '' :
                // <React.Fragment>
                //     <span><Link to="/login">Log In</Link></span>
                //     <span><Link to="/signin">Sign In</Link></span>
                // </React.Fragment>
            }
               
            </div>
        </div>
    )
}

Header.propTypes = {
    openMenuCallback: PropTypes.func.isRequired
}

export default Header;