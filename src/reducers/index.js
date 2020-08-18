import { combineReducers } from 'redux';
import menu from './menu';
import order from './order';
import listElements from './listElements';
import register from './registration';

export default combineReducers({
    menu,
    order,
    listElements,
    register
})