import React from 'react';
import styles from './Menu.scss';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {setOpenMenu} from '../../action_creators/index';
import Nav from '../Navigation/Nav';

class Menu extends React.Component{
    constructor(props){
        super(props);
    }
    openMenu = () => {
        this.props.onSetOpenMenu(!this.props.menu_is_open);
    }

    render(){
        const cls = (this.props.menu_is_open) ? styles.opened : styles.closed;
        return(
            <div className={styles.container + " " + cls}>
                <Nav openMenu={this.openMenu} />
            </div>
        )
    }
}

Menu.defaultProps = {
    menu_is_open : false
}
Menu.propTypes = {
    menu_is_open : PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
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

export default connect(mapStateToProps,mapDispatchToProps)(Menu);