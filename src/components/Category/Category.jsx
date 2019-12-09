import React from 'react';
import styles from './Category.scss';
import PropTypes from 'prop-types';


const ItemCategories = ({item,callBackSelectItem}) => {
    return(
        <div className={styles.item_container} onClick={()=>callBackSelectItem({id:item.id, select:item.title})}>
                <div className={styles.img_container}>
                    <img src={item.img_url} />
                </div>
                <div className={styles.title}>{item.title}</div>
            </div>
    )
}

ItemCategories.propTypes = {
    item: PropTypes.object.isRequired,
    callBackSelectItem: PropTypes.func.isRequired
}

export default ItemCategories;