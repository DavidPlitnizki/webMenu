import React,{useCallback} from 'react';
import PropTypes from 'prop-types';
import {setOpenMenu} from '../../action_creators/index';
import { useDispatch } from 'react-redux';
import styles from './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = React.memo(({openMenu, animOpen}) =>{
    const dispatch = useDispatch();
    const anim_cls = (animOpen) ? styles.anim : '';

    const menuHandler =() => {
        dispatch(setOpenMenu(false));
    };

    return(
        <div className={styles.wrapper}>
            <ul className={styles.container + ' ' + anim_cls} onClick={menuHandler}>
                <li style={{transition: 'opacity .35s'}}><Link to="/">Main</Link></li>
                <li style={{transition: 'opacity .55s'}}><Link to="/Order">Order</Link></li>
                <li style={{transition: 'opacity .75s'}}><Link to="/About">About</Link></li>
                <li style={{transition: 'opacity .95s'}}><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    )
})

export default Nav;