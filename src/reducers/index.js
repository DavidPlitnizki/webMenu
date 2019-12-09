import { combineReducers } from 'redux';
import menu from './menu';
import order from './order';
import listElements from './listElements';

export default combineReducers({
    menu,
    order,
    listElements
})