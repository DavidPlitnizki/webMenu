import React from 'react';
import styles from './Menu.scss';
import {useSelector, useDispatch} from 'react-redux';
import PropTypes from 'prop-types';
import {setOpenMenu} from '../../action_creators/index';
import Nav from '../Navigation/Nav';

const Menu = props => {

    const isOpenMenu = useSelector(state => state.menu);
    const dispatch = useDispatch();

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