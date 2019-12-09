import React from 'react';
import PropTypes from 'prop-types';
import styles from './Header.scss';

const Header = ({menu_state, openMenuCallback, anim}) => {
    const cls_menu = (menu_state) ? styles.menu_is_opened : styles.menu_is_closed;
    const cls_anim = (anim) ? styles.anim : '';

    return(
        <div className={styles.container}>
            <div className={styles.menu + " " + cls_menu} onClick={openMenuCallback}></div>
            <div className={styles.logo + " " + cls_anim}></div>
        </div>
    )
}

Header.propTypes = {
    openMenuCallback: PropTypes.func.isRequired,
    menu_state: PropTypes.bool.isRequired
}

export default Header;