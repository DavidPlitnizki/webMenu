import React from 'react';
import PropTypes from 'prop-types';
import styles from './Serving.scss';


const Item = (props) => {
    return(
        <div className={styles.items_container}>
            <div className={styles.item_img}>
                <img src={"../../assets/items/"+props.img+".png"} />
                <div className={styles.title}>{props.title}</div>
            </div>
           {props.children}
        </div>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default Item;