import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ListServing from '../ListServing/ListServing';
import { selectItemForOrder } from '../../action_creators';
import {uniqNumber} from '../../helpers/util';

const Products = props => {
    const items = useSelector(state => state.listElements.items);
    const categories = useSelector(state => state.listElements.categories);
    const dispatch = useDispatch();

   const setCategoryTitle = (catArr) => {
        if(!catArr) return false;

       return catArr.filter((item)=>{
            return item.id == props.match.params.id;
        })
    }

    const orderProduct =(item)=> {
        const order = Object.assign(item,{id_item: Math.floor(uniqNumber()).toString()});
        dispatch(selectItemForOrder(order));
    }

    const returnToMain =()=> {
        props.history.goBack();
    }

        
    const selectedObj = setCategoryTitle(categories);
    
    return(
        <div>
            {   (selectedObj && selectedObj.length > 0) ?
                <ListServing items={items} id={props.match.params.id} 
                    title={selectedObj[0].title} titleImg={selectedObj[0].img_url}
                    onOrderItem={orderProduct} onBack={returnToMain}  />
                    :
                    'loading'
            }
        </div>
    )
}
export default Products;