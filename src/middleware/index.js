import {SEND_INIT_DATA,fetchInitDataSuccess} from '../action_creators/index.js';
import axios from 'axios';

const getCategories = ()=>{
        return axios.get('/data/cat.json');
}
const getItems = ()=> {
    return axios.get('/data/item.json');
}

const customMiddleware = store => next => action =>{
    if(action.type == SEND_INIT_DATA){
        let categories = false;
        let items = false;
            axios.all([getCategories(), getItems()])
            .then(axios.spread(function (cats, itemes) {
                let fetchedData = {
                    categories: cats.data,
                    items: itemes.data
                }
                store.dispatch(fetchInitDataSuccess(fetchedData));
            })).catch(()=>{
                console.log("error")
            })
    }else{
        next(action);
    }
}

export default customMiddleware;