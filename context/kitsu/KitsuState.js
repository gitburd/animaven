import React, {useReducer} from 'react'
import GithubContext from './githubContext'
import GithubReducer from './githubReducer'
import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_USER,
    GET_REPOS
}from '../types'
import Search from '../../components/users/Search'

const GithubState = props => {
    const initialState = {
        users:[],
        user:{},
        repos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState)

    const searchUsers = (text) => {
        setLoading();
    
        let proxyUrl = "https://cors-anywhere.herokuapp.com/"
        let targetUrl = `https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(data => dispatch({
            type:SEARCH_USERS,
            payload: data.items
        }))
        .catch(function(e) {console.log(e) })

   
      }
    
    const getUser = (username) => {
        setLoading();
        let proxyUrl = "https://cors-anywhere.herokuapp.com/"
        let targetUrl = `https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(data => dispatch({
            type:GET_USER,
            payload: data
        }))
        .catch(function(e) {console.log(e) })
    }
    
    const getUserRepos = (username) => {
        setLoading();
        let proxyUrl = "https://cors-anywhere.herokuapp.com/"
        let targetUrl = `https://api.github.com/users/${username}/repos?per_page=5&sort=created:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`
        
        fetch(proxyUrl + targetUrl)
        .then(res => res.json())
        .then(data => dispatch({
            type:GET_REPOS,
            payload: data
        }))
        .catch(function(e) {console.log(e) })
    }

    const clearUsers = () => dispatch({type: CLEAR_USERS})
    
    const setLoading = () => dispatch({ type: SET_LOADING })

    return <GithubContext.Provider
        value={{
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState