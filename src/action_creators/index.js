export const OPEN_MENU = 'OPEN_MENU';
export const setOpenMenu =(menu_state)=> dispatch=>{
    dispatch({
        type: OPEN_MENU,
        payload: {menu_state}
    });
}

export const ADD_TO_ORDER = 'ADD_TO_ORDER';
export const selectItemForOrder = (data)=> dispatch =>{
    dispatch({
        type: ADD_TO_ORDER,
        payload: data
    })
}

export const REMOVE_FROM_ORDER = 'REMOVE_FROM_ORDER';
export const removeItemFromOrder = (id)=> dispatch => {
    dispatch({
        type: REMOVE_FROM_ORDER,
        payload: id
    })
}

export const SEND_INIT_DATA = 'SEND_INIT_DATA';
export const sendInitData = () => dispatch => {
    dispatch({
        type: SEND_INIT_DATA
    })
}

export const FETCH_INIT_DATA = 'FETCH_INIT_DATA';
export const fetchInitDataSuccess = (data) => dispatch => {
    dispatch({
        type: FETCH_INIT_DATA,
        payload: data
    })
}

export const SELECT_CATEGORY = 'SELECT_CATEGORY';
export const selectCategory = (data) => dispatch => {
    dispatch({
        type: SELECT_CATEGORY,
        payload: data
    })
}