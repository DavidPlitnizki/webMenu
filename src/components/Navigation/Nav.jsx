import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import styles from './Nav.scss';
import { Link } from 'react-router-dom';

const Nav = React.memo(({openMenu, animOpen}) =>{

    const anim_cls = (animOpen) ? styles.anim : '';

    return(
        <div className={styles.wrapper}>
            <ul className={styles.container + ' ' + anim_cls} >
                <li style={{transition: 'opacity .35s'}}><Link to="/">Main</Link></li>
                <li style={{transition: 'opacity .55s'}}><Link to="/Order">Order</Link></li>
                <li style={{transition: 'opacity .75s'}}><Link to="/About">About</Link></li>
                <li style={{transition: 'opacity .95s'}}><Link to="/Contact">Contact</Link></li>
            </ul>
        </div>
    )
})

export default Nav;