import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';
import MenuIcon from '../Icons/MenuIcon';

const Header = ({ openMenuCallback}) => {
    

    return (
        <div className={styles.container}>
            <MenuIcon openMenu={openMenuCallback} />
            <div className={styles.logo}></div>
        </div>
    )
}

Header.propTypes = {
    openMenuCallback: PropTypes.func.isRequired
}

export default Header;