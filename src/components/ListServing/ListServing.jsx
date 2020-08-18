import React from 'react';
import PropTypes from 'prop-types';
import styles from './ListServing.scss';
import Serving from '../Serving/Serving';
import AddBtn from '../Buttons/AddBtn';




const ListServing =(props)=> {
    
    let filtredCategory = undefined;
    let filtredItems = 'COMING SOON!!!';

   
    const orderItem =(item)=> {
        props.onOrderItem(item);
    }


    filtredCategory = props.items.filter((item)=>{
        return item.id_category == props.id;
    })
    
    if(filtredCategory.length > 0){
        filtredItems = filtredCategory[0].items.map((item)=>(
                <Serving key={item.id_item} title={item.title} img={item.url_img} key={item.id_item}>
                    <AddBtn clickHandle={orderItem} item={item} />
                </Serving>
            ));
    }
    
    return(
            <div className={styles.container}>

                <div className={styles.title_wrapper}>
                    <div className={styles.imgBack} onClick={props.onBack} />
                    <div className={styles.imgCat}>
                        <img src={props.titleImg} />
                    </div>
                    <div className={styles.title}>{props.title}</div>
                </div>

                <div className={styles.content}>
                    {filtredItems}
                </div>


            </div>
            )
}


export default React.memo(ListServing);


