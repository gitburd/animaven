import {
    ADD_LIST_ITEM,
    GET_STORAGE,
    REMOVE_LIST_ITEM
}from '../types'

export default (state, action) => {
    switch(action.type){
        case ADD_LIST_ITEM:
            if(!state.watchList || state.watchList.length === 0){
                return{
                    ...state,
                    watchList: [action.payload]
                }
            } else {
                return{
                    ...state,
                    watchList: [...state.watchList, action.payload]
                }
            }
        case REMOVE_LIST_ITEM:
            return{
                ...state,
                watchList: state.watchList.filter((anime)=> {
                    return anime.id !== action.payload
                })
            }
        case GET_STORAGE:
            return{
                ...action.payload
            }    
        default:
            return state
    }
}