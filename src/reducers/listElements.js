import {FETCH_INIT_DATA} from '../action_creators/index';

let initialState = {
    categories: false,
    items: false
}

export default function listElements(state = initialState,action){
    if(action.type == FETCH_INIT_DATA){
        let new_state = {
            categories: action.payload.categories,
            items: action.payload.items
        }
        return new_state;
    }
    return state;
}
