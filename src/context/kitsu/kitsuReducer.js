import {
    SEARCH_ANIMES,
    SET_LOADING,
    CLEAR_ANIMES,
    GET_ANIME,
    GET_GENRES,
    GET_GENRE_ANIMES
}from '../types'

export default (state, action) => {
    switch(action.type){
        case SEARCH_ANIMES:
            return{
                ...state,
                animes:action.payload,
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
        case GET_GENRES:
            return{
                ...state,
                genres:action.payload,
                loading:false
            }
        case GET_GENRE_ANIMES:
        return{
            ...state,
            genreAnimes: action.payload,
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