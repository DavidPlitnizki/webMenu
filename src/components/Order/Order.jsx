import React,{useState} from 'react';
import styles from './Order.scss';
import { useDispatch, useSelector } from 'react-redux';
import Serving from '../Serving/Serving';
import {removeItemFromOrder} from '../../action_creators/index';
import RemoveBtn from '../Buttons/RemoveBtn';


const Order =()=> {
    const [text, setText] = useState('EMPTY!!!');
    const orders = useSelector(state => state.order);
    const dispatch = useDispatch();

    const removeItem=({id})=>{
        dispatch(removeItemFromOrder(id));
    }

        return(
            <div className={styles.container}>
               {orders.length > 0 ? orders.map((item,i)=>(
                <Serving key={i} id={item.id} title={item.title} img={item.url_img} >
                    <RemoveBtn clickHandle={removeItem} item={item} />
                </Serving>
            )) : text}
            </div> 
           
        )
}

export default Order;
