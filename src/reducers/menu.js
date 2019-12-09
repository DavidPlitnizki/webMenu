import {OPEN_MENU} from '../action_creators/index';

const initialState = {
    menu_state: false
}

export default function Menu(state = false,action){
    if(action.type === "OPEN_MENU"){
        return action.payload.menu_state;
    }
    return state;
}