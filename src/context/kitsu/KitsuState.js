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

const KitsuState = props => {
    const initialState = {
        animes:[],
        anime:{},
        genres:[],
        genreAnimes:[],
        genresList:['Action', 'Adventure', 'Anime Influenced', 'Cars', 'Comedy', 'Crime', 'Dementia', 'Demons', 'Documentary', 'Doujinshi', 'Drama', 'Ecchi', 'Family', 'Fantasy', 'Food', 'Friendship', 'Game', 'Gender', 'Gore', 'Harem', 'Historical', 'Horror', 'Isekai', 'Kids', 'Law', 'Magic', 'Mahou Shoujo', 'Mahou Shounen', 'Martial Arts', 'Mature', 'Mecha', 'Medical', 'Military', 'Music', 'Mystery', 'Parody', 'Police', 'Political', 'Psychological', 'Racing', 'Romance', 'Samurai', 'School', 'Sci-Fi', 'Shoujo Ai', 'Shounen Ai', 'Slice of Life', 'Space', 'Sports', 'Supernatural', 'Super Power', 'Thriller', 'Tragedy', 'Vampire', 'Workplace', 'Youth', 'Zombies'],
        genreLimits:{'Action': 10, 'Adventure':10, 'Anime Influenced':10, 'Cars':5, 'Comedy':10, 'Crime':3, 'Dementia':10, 'Demons':10, 'Documentary':1, 'Doujinshi':8, 'Drama':10, 'Ecchi':10, 'Family':3, 'Fantasy':10, 'Food':2, 'Friendship':10, 'Game':10, 'Gender':1, 'Gore':2, 'Harem':10, 'Historical':10, 'Horror':10, 'Isekai':1, 'Kids':10, 'Law':1, 'Magic':10, 'Mahou Shoujo':10, 'Mahou Shounen':1, 'Martial Arts':10, 'Mature':1, 'Mecha':10, 'Medical':1, 'Military':10, 'Music':10, 'Mystery':10, 'Parody':10, 'Police':10, 'Political':1, 'Psychological':10, 'Racing':3, 'Romance':10, 'Samurai':10, 'School':10, 'Sci-Fi':10, 'Shoujo Ai':4, 'Shounen Ai':5, 'Slice of Life':10, 'Space':10, 'Sports':10, 'Supernatural':10, 'Super Power':10, 'Thriller':6, 'Tragedy':1, 'Vampire':7, 'Workplace':2, 'Youth':1, 'Zombies':3},
        loading: false,
        dataCount:0
    }

    const [state, dispatch] = useReducer(KitsuReducer, initialState)

    const searchAnimes = (text,offset) => {
        setLoading();
    
        let proxyUrl = "https://cors-anywhere.herokuapp.com/"
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
            // let proxyUrl = "https://cors-anywhere.herokuapp.com/"
        
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

    const getGenreAnimes = (genre,offset) => {
        setLoading();
        let proxyUrl = "https://afternoon-castle-81655.herokuapp.com/"
        let targetUrl = `https://kitsu.io/api/edge/anime?page[limit]=15&page[offset]=${offset}&filter[genres]=${genre}`

        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(res =>{
            dispatch({
            type:GET_GENRE_ANIMES,
            dataCount: res.meta.count,
            payload: res.data
        })})
        .catch(function(e) {console.log(e) })
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
            search:state.search,
            genreLimits:state.genreLimits,
            resultsError:state.resultsError,
            dataCount:state.dataCount,
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