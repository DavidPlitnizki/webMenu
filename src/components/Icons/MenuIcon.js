import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import styles from './MenuIcon.scss';

const MenuIcon = ({ openMenu, menuState }) => {
    const [menu, SetMenu] = useState('');

    useEffect(useCallback(()=> {
        const style_menu = (menuState) ? styles.menu_is_opened : styles.menu_is_closed;
        SetMenu(style_menu);
    }))

    const toggleIcon =()=> {
        openMenu();
    }

    return (
        <div className={`${styles.menu} ${menu}`} onClick={toggleIcon}>
            <div className={styles.line} />
            <div className={styles.line} />
            <div className={styles.line} />
        </div>
    )
}

MenuIcon.propTypes = {
    openMenu: PropTypes.func.isRequired
}

export default MenuIcon;