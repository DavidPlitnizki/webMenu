import React from 'react';
import HeaderContainer from './components/Header/HeaderContainer';
import Menu from './components/Menu/Menu';
import styles from './styles/layout.scss';
import styleG from './styles/style.css';


const App = props => {
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
