import React, {lazy, Suspense, useState, useEffect, useCallback} from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderContainer.scss';
import { useSelector, useDispatch } from 'react-redux';
import {setOpenMenu} from '../../action_creators/index';
const Header = lazy(() => import('./Header'));


const HeaderContainer = (porps) => {

    const [anim, setAnim] = useState(false);
    const menu_is_open = useSelector(state => state.menu);
    const dispatch = useDispatch();

    useEffect(()=> {
        window.addEventListener('scroll', scrollEffect);

        return (()=> {
            window.removeEventListener('scroll');
        })
    },[])

    const scrollEffect = useCallback((e) => {
        (window.scrollY > 50) ? setAnim(true) : setAnim(false);
    },[]);

    const menuHandler = useCallback((menu_state) => {
        dispatch(setOpenMenu(menu_state));
    }, []);


   const openMenu = () => {
        menuHandler(!menu_is_open);
    }

    const header_shadow_anim = (anim) ? styles.header_anim : '';

    return (
        <div className={styles.container}>
            <div className={`${styles.content} ${header_shadow_anim}`}>
            <Suspense fallback={<div>Loading...</div>}>
                <Header
                    openMenuCallback={openMenu}
                />
                </Suspense>
            </div>   
        </div>
    )
}

export default HeaderContainer;