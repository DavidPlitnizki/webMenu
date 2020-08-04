import React, {useState} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import ListCategories from '../ListCategories/ListCategories';

const Main = () => {
    const [category, setCategory] = useState('all');
    const categories = useSelector(state => state.listElements.categories);


    const selectCategoryItem = ({id,select})=> {
        setCategory({category:select,id});
    };

    const back=()=> {
        setCategory({category:'all'});
    }

    return (
        <div>
            <React.Fragment>
                <ListCategories selectCategory={selectCategoryItem} categories={categories} />
            </React.Fragment>
        </div>
    )
}

Main.propTypes = {
    categories: PropTypes.array
}

export default Main;