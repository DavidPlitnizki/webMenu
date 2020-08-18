import React, {useEffect} from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Menu from './components/Menu/Menu';
import styles from './styles/layout.scss';
import styleG from './styles/style.css';
import {useDispatch} from 'react-redux';
import {sendInitData} from './action_creators/index';




const App = props => {

    const dispatch = useDispatch();

    useEffect(()=> {
        dispatch(sendInitData())
    },[])
    


    return(
        <React.Fragment>
            <HeaderContainer />
                <main className={styles.main_container}>
                    {props.children}
                </main>
            <Menu/>
        </React.Fragment>
    )
}

export default App;
