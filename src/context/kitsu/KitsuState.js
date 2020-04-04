import React, {useReducer} from 'react'
import KitsuContext from './kitsuContext'
import KitsuReducer from './kitsuReducer'
import {
    SEARCH_ANIMES,
    SET_LOADING,
    CLEAR_ANIMES,
    GET_ANIME,
    GET_GENRES,
    GET_GENRE_ANIMES
}from '../types'
import Search from '../../components/animes/Search'

const KitsuState = props => {
    const initialState = {
        animes:[],
        anime:{},
        genres:[],
        genreAnimes:[],
        genresList:['Action', 'Adventure', 'Anime Influenced', 'Cars', 'Comedy', 'Cooking', 'Crime', 'Dementia', 'Demons', 'Documentary', 'Doujinshi', 'Drama', 'Ecchi', 'Family', 'Fantasy', 'Food', 'Friendship', 'Game', 'Gender', 'Gore', 'Harem', 'Historical', 'Horror', 'Isekai', 'Kids', 'Law', 'Magic', 'Mahou Shoujo', 'Mahou Shounen', 'Martial Arts', 'Mature', 'Mecha', 'Medical', 'Military', 'Music', 'Mystery', 'Parody', 'Police', 'Political', 'Psychological', 'Racing', 'Romance', 'Samurai', 'School', 'Sci-Fi', 'Shoujo Ai', 'Shounen Ai', 'Slice of Life', 'Space', 'Sports', 'Supernatural', 'Super Power', 'Thriller', 'Tokusatsu', 'Tragedy', 'Vampire', 'Workplace', 'Youth', 'Zombies'],
        loading: false
    }

    const [state, dispatch] = useReducer(KitsuReducer, initialState)

    const searchAnimes = (text) => {
        setLoading();
    
        let proxyUrl = "https://cors-anywhere.herokuapp.com/"
        let targetUrl = `https://kitsu.io/api/edge/anime?filter[text]=${text}`
        
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => dispatch({
            type:SEARCH_ANIMES,
            payload: res.data
        }))
        .catch(function(e) {console.log(e) })
      }
    
    const getAnime = (id) => {
        setLoading();
        let proxyUrl = "https://cors-anywhere.herokuapp.com/"
        let targetUrl = `https://kitsu.io/api/edge/anime/${id}`
        
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => dispatch({
            type:GET_ANIME,
            payload: res.data
        }))
        .catch(function(e) {console.log(e) })
    }

    const getGenres = (id) => {
        setLoading();
        let proxyUrl = "https://cors-anywhere.herokuapp.com/"
        let targetUrl = `https://kitsu.io/api/edge/anime/${id}/genres`
        
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => dispatch({
            type:GET_GENRES,
            payload: res.data
        }))
        .catch(function(e) {console.log(e) })
    }

    const getGenreAnimes = (genre) => {
        setLoading();
        let proxyUrl = "https://cors-anywhere.herokuapp.com/"
        let targetUrl = `https://kitsu.io/api/edge/anime?filter[genres]=${genre}`
        
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res => dispatch({
            type:GET_GENRE_ANIMES,
            payload: res.data
        }))
        .catch(function(e) {console.log(e) })
        // dispatch({type: GET_GENRE_ANIMES, payload:[{id:1},{id:2}]})
    }

    const clearAnimes = () => dispatch({type: CLEAR_ANIMES})
    
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <KitsuContext.Provider
        value={{
            animes: state.animes,
            anime: state.anime,
            loading: state.loading,
            genres: state.genres,
            genresList:state.genresList,
            relatedAnimes: state.relatedAnimes,
            genreAnimes:state.genreAnimes,
            searchAnimes,
            clearAnimes,
            getAnime,
            getGenres,
            getGenreAnimes
        }}
    >
        {props.children}
    </KitsuContext.Provider>
}

export default KitsuState