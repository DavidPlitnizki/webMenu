import React from 'react';
import PropTypes from 'prop-types';
import styles from './Serving.scss';


const Item = (props) => {
    return(
        <React.Fragment>
            <div className={styles.items_container}>
                <div className={styles.front}>
                    <section className={styles.left}>
                        <div className={styles.item_img}>
                            <img src={"../../assets/items/"+props.img+".png"} />
                        </div>
                    </section>
                    <section className={styles.right}>
                        <div className={styles.title}>{props.title}</div>
                        
                        <div className={styles.price}>PRICE - 250$</div>
                    </section>
                </div>

                    {props.children}
            </div>
        </React.Fragment>
    )
}

Item.propTypes = {
    title: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired
}

export default Item;


// <p className={styles.desc}>
//                             Steamed salamon - test test test
//                         </p>