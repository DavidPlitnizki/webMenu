import {LOGIN} from '../action_creators/index';

const initialState = {
    isAuth: false,
    email: null,
    password: null
}

export default function register(state = initialState, action){
    
    if(action.type === LOGIN){
        
        return {
            ...state,
            email: action.payload.email,
            password: action.payload.password,
            isAuth: true
        }
    }
    return {...state};
}
