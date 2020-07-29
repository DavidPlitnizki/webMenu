import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ListCategories from '../ListCategories/ListCategories';
import ListServing from '../ListServing/ListServing';
import {selectItemForOrder,sendInitData} from '../../action_creators/index';

class Main extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            category: 'all'
        };
    }

    selectCategoryItem=({id,select})=>{
        this.setState({category:select,id});
    }

    back=()=>{
        this.setState({category:'all'});
    }

    selectContent(){
            return <ListCategories selectCategory={this.selectCategoryItem} categories={this.props.categories} />;
    }


    render(){  
        return(
            <React.Fragment>
               {this.selectContent()}
            </React.Fragment>
        )
    }
}


Main.defaultProps = {
    menu_is_open: false
}
Main.propTypes = {
    menu_is_open: PropTypes.bool.isRequired
}

const mapStateToProps = (state) => {
    return{
      menu_is_open: state.menu,
      categories: state.listElements.categories,
      items: state.listElements.items
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    onSelectItemForOrder: (id)=>{
        dispatch(selectItemForOrder(id));
    },
    onSendInitData: ()=>{
        dispatch(sendInitData());
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(Main);