import React, {lazy, Suspense} from 'react';
import PropTypes from 'prop-types';
import styles from './HeaderContainer.scss';
import { connect } from 'react-redux';
import {setOpenMenu} from '../../action_creators/index';
const Header = lazy(() => import('./Header'));




class HeaderContainer extends React.Component{

    constructor(props) {
        super(props);

        window.addEventListener('scroll', this.scrollEffect);
        this.state = {
            anim: false
        }
    }

    shouldComponentUpdate(prevState, nextState) {
        return this.state.anim !== nextState.anim;
    }

    openMenu = () => {
        this.props.onSetOpenMenu(!this.props.menu_is_open);
    }

    scrollEffect = (e) => {
        if(window.scrollY > 50){
            this.setState({
                anim: true
            })
        }
        else{
            this.setState({
                anim: false
            })
        }

    }

    render(){
        const cls = (this.state.anim) ? styles.anim : '';
        const header_shadow_anim = (this.state.anim) ? styles.header_anim : '';

        return (
            <div className={styles.container + ' ' +cls}>
                <div className={styles.content + ' ' + header_shadow_anim}>
                <Suspense fallback={<div>Loading...</div>}>
                    <Header
                        openMenuCallback={this.openMenu}
                        menu_state={this.props.menu_is_open}
                        anim={this.state.anim}
                    />
                    </Suspense>
                </div>   
            </div>
        )
    }
}

HeaderContainer.defaultProps = {
    menu_is_open: false
}

HeaderContainer.propTypes = {
    menu_is_open: PropTypes.bool.isRequired
}

const mapStateToProps = (state,own_props) => {
    return{
      menu_is_open: state.menu
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    onSetOpenMenu: (menu_state)=>{
        let data = {
            menu_state
        }
      dispatch(setOpenMenu(data));
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(HeaderContainer);