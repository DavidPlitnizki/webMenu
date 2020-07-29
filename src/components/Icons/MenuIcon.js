import React, {useState} from 'react';
import PropTypes from 'prop-types';
import styles from './MenuIcon.scss';

const MenuIcon = ({ openMenu }) => {
    const [menu, SetMenu] = useState(styles.menu_is_closed);

    const toggleIcon =()=> {
        const menu_state = (menu === styles.menu_is_closed) ? styles.menu_is_opened : styles.menu_is_closed;
        SetMenu(menu_state);
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