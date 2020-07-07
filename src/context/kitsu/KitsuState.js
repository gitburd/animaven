import React, {useReducer, useEffect} from 'react'
import KitsuContext from './kitsuContext'
import KitsuReducer from './kitsuReducer'
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

const KitsuState = props => {
    const initialState = {
        animes:[],
        anime:{},
        genres:[],
        genreAnimes:[],
        genresList:['Action', 'Adventure', 'Anime Influenced', 'Cars', 'Comedy', 'Crime', 'Dementia', 'Demons', 'Documentary', 'Doujinshi', 'Drama', 'Ecchi', 'Family', 'Fantasy', 'Food', 'Friendship', 'Game', 'Gender', 'Gore', 'Harem', 'Historical', 'Horror', 'Isekai', 'Kids', 'Law', 'Magic', 'Mahou Shoujo', 'Mahou Shounen', 'Martial Arts', 'Mature', 'Mecha', 'Medical', 'Military', 'Music', 'Mystery', 'Parody', 'Police', 'Political', 'Psychological', 'Racing', 'Romance', 'Samurai', 'School', 'Sci-Fi', 'Shoujo Ai', 'Shounen Ai', 'Slice of Life', 'Space', 'Sports', 'Supernatural', 'Super Power', 'Thriller', 'Tragedy', 'Vampire', 'Workplace', 'Youth', 'Zombies'],
        loading: false,
        dataCount:0,
        search:'',
        genre:''
    }

    const [state, dispatch] = useReducer(KitsuReducer, initialState)

    const searchAnimes = (text,offset) => {
        setLoading();
    
        let proxyUrl = "https://afternoon-castle-81655.herokuapp.com/"
        let targetUrl = `https://kitsu.io/api/edge/anime?page[limit]=15&page[offset]=${offset}&filter[text]=${text}`
        
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => {
            dispatch({
            type:SEARCH_ANIMES,
            payload: {
                data: res.data,
                dataCount: res.meta.count,
                search:text
            }
        })
        }
            )
        .catch(function(e) {console.log(e) })
      }
    
    const getAnime = (id) => {
        setLoading();
        let proxyUrl = "https://afternoon-castle-81655.herokuapp.com/"
        let targetUrl = `https://kitsu.io/api/edge/anime/${id}`
        
        fetch(proxyUrl + targetUrl, {headers: {'Origin': 'https://kitsu.io/api/edge/anime/${id}'}})
        .then(res => res.json())
        .then(res => dispatch({
            type:GET_ANIME,
            payload: res.data
        }))
        .catch(function(e) {console.log(e) })
    }

    const getGenres = (id) => {
        setLoading();
        let proxyUrl = "https://afternoon-castle-81655.herokuapp.com/"
        let targetUrl = `https://kitsu.io/api/edge/anime/${id}/genres`
        
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => dispatch({
            type:GET_GENRES,
            payload: res.data
        }))
        .catch(function(e) {console.log(e) })
    }

    const getGenreAnimes = (genre,offset) => {
        console.log('from state', genre)
        setLoading();
        let proxyUrl = "https://afternoon-castle-81655.herokuapp.com/"
        let targetUrl = `https://kitsu.io/api/edge/anime?page[limit]=15&page[offset]=${offset}&filter[genres]=${genre}`

        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res =>{
            dispatch({
            type:GET_GENRE_ANIMES,
            dataCount: res.meta.count,
            genre,
            payload: res.data
        })})
        .catch(function(e) {console.log(e) })
    }

    const clearAnimes = () => dispatch({type: CLEAR_ANIMES})
    
    const setLoading = () => dispatch({ type: SET_LOADING })
    
    const clearLoading = () => dispatch({ type: CLEAR_LOADING })

    const setGenre = (genre) => {
       
        dispatch({
          type: SET_GENRE,
          payload: genre
        });
      }
    
    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state))
        // console.log('kit state set', state)
    })


    const getStorage = () => {
        const storage = localStorage.getItem('state')
        // console.log('kit state get', storage)
        const storagePayload = storage ? JSON.parse(storage) : initialState
        dispatch({
          type: GET_STORAGE,
          payload: storagePayload
        });
      }
    
    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state))
        // console.log('kit state set', state)
    })


    return <KitsuContext.Provider
        value={{
            animes: state.animes,
            anime: state.anime,
            loading: state.loading,
            genres: state.genres,
            genresList:state.genresList,
            relatedAnimes: state.relatedAnimes,
            genreAnimes:state.genreAnimes,
            search:state.search,
            genre:state.genre,
            genreLimits:state.genreLimits,
            resultsError:state.resultsError,
            dataCount:state.dataCount,
            searchAnimes,
            clearAnimes,
            getAnime,
            getGenres,
            getGenreAnimes,
            getStorage,
            setGenre,
            clearLoading

        }}
    >
        {props.children}
    </KitsuContext.Provider>
}

export default KitsuState