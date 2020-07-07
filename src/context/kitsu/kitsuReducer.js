import {
    SEARCH_ANIMES,
    SET_LOADING,
    CLEAR_LOADING,
    CLEAR_ANIMES,
    GET_ANIME,
    GET_GENRES,
    GET_GENRE_ANIMES,
    GET_STORAGE,
    SET_GENRE
}from '../types'

export default (state, action) => {
    switch(action.type){
        case SEARCH_ANIMES:
            if(action.payload.data.length === 0 ){
                return{
                    ...state,
                    resultsError:'No results found',
                    animes:[],
                    search:'',
                    loading:false,
                }
            } else {
                return{
                    ...state,
                    animes:action.payload.data,
                    search:action.payload.search,
                    genre:null,
                    dataCount:action.payload.dataCount,
                    loading:false,
                    resultsError: null,
                    genreAnimes: []
                }
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
            genre:action.genre,
            search:null,
            animes:[],
            dataCount:action.dataCount,
            loading:false
        }    
        case SET_GENRE:
        return{
            ...state,
            genre:action.payload,
            search:null,
            animes:[]
        }    
        case SET_LOADING:
            return{
                ...state, 
                loading: true
            }
        case CLEAR_LOADING:
            return{
                ...state, 
                loading: false
            }    
        case GET_STORAGE:
            return{
                ...action.payload
            }    
        default:
            return state
    }
}