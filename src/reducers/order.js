import {ADD_TO_ORDER,REMOVE_FROM_ORDER} from '../action_creators/index';

export default function order(state = [],action){
    
    if(action.type === "ADD_TO_ORDER"){
        let new_state = [];
        return new_state = [...state, action.payload];
    } else if(action.type === 'REMOVE_FROM_ORDER'){
        let new_state = [];
        new_state = state.filter(item => item.id != action.payload);
        return new_state;
    }
    return state;
}
