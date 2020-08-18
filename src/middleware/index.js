import {SEND_INIT_DATA,fetchInitDataSuccess, LOGIN} from '../action_creators/index.js';
import axios from 'axios';

const getCategories = ()=>{
        return axios.get('/data/cat.json');
}
const getItems = ()=> {
    return axios.get('/data/item.json');
}

const validateUser = ({email, password}) => {
    return (email == 'q@q' && password == 1);
    
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
    }if(action.type === LOGIN) {
        const user = validateUser(action.payload);
        if(user) next(action);
        
    }else{
        next(action);
    }
}

export default customMiddleware;