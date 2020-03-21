import {
    SEARCH_ANIMES,
    SET_LOADING,
    CLEAR_ANIMES,
    GET_ANIME,
    GET_REPOS
}from '../types'

export default (state, action) => {
    switch(action.type){
        case SEARCH_ANIMES:
            return{
                ...state,
                ainmes:action.payload,
                loading:false
            }
        case GET_ANIME:
            return{
                ...state,
                anime:action.payload,
                loading:false
            }    
        case CLEAR_ANIMES:
            return{
                ...state,
                animes:[],
                loading:false
            }    
        case GET_REPOS:
            return{
                ...state,
                repos:action.payload,
                loading:false
            }   
        case SET_LOADING:
            return{
                ...state, 
                loading: true
            }
        default:
            return state
    }
}