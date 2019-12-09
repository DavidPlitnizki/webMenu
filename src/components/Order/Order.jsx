import React from 'react';
import styles from './Order.scss';

import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Serving from '../Serving/Serving';
import {removeItemFromOrder} from '../../action_creators/index';
import RemoveBtn from '../Buttons/RemoveBtn';


class Order extends React.Component{
    constructor(props){
        super(props);
        this.emptyText = 'EMPTY!!!';
    }
    removeItem=({id})=>{
        this.props.onRemoveItemForOrder(id);
    }

    render(){
        return(
            <div className={styles.container}>
               {this.props.orders.length > 0 ? this.props.orders.map((item,i)=>(
                <Serving key={i} id={item.id} title={item.title} img={item.img} >
                    <RemoveBtn clickHandle={this.removeItem} item={item} />
                </Serving>
            )) : this.emptyText}
            </div> 
           
        )
    }
}


const mapStateToProps = (state,props) => {
    return{
      orders: state.order,
      items: state.listElements.items
    }
  };
  
  const mapDispatchToProps = dispatch => ({
    onRemoveItemForOrder: (id)=>{
        dispatch(removeItemFromOrder(id));
    }
  });

export default connect(mapStateToProps,mapDispatchToProps)(Order);




// removeFromOrder={this.removeFunc}