import React from 'react';
import { Link } from 'react-router-dom';
import styles from './ListCategories.scss';
import PropTypes from 'prop-types';
import Category from '../Category/Category';



const ListCategories = ({categories, selectCategory}) => {
let items;

    if (categories.length > 0){
        items = categories.map((item)=>{
            return( <Link to={"category/"+item.id} key={item.id} className={styles.textLinks}>
                        <Category  item={item} callBackSelectItem={selectCategory} />
                    </Link>)
           
        });
    }
    return(
        <div className={styles.container}>
            {items}
        </div>
    )
}

ListCategories.propTypes = {
    selectCategory: PropTypes.func.isRequired
}

export default ListCategories;

