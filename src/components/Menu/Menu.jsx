import React from 'react';
import styles from './Menu.scss';
import {useSelector} from 'react-redux';
import Nav from '../Navigation/Nav';

const Menu = props => {
    const isOpenMenu = useSelector(state => state.menu);

    const cls = (isOpenMenu) ? styles.opened : styles.closed;

    return (
        <div className={styles.container + " " + cls}>
            <Nav 
                openMenu={isOpenMenu}
                animOpen={isOpenMenu} />
        </div>
    )
}


export default Menu;