import React, {useReducer, useEffect} from 'react'
import WatchListContext from './watchListContext'
import WatchListReducer from './watchListReducer'
import {
    ADD_LIST_ITEM,
    GET_STORAGE,
    REMOVE_LIST_ITEM
}from '../types'

const WatchListState = props => {
    const initialState = {
       watchList:[],
       title:'Watch List',
       comments:'jjjj '
    }
    
    const [state, dispatch] = useReducer(WatchListReducer, initialState)

    const addListItem = (e, anime) => {
        dispatch({
           type:ADD_LIST_ITEM,
           payload:anime
        })
    }

    const removeListItem = (e, anime) => {
        dispatch({
           type:REMOVE_LIST_ITEM,
           payload:anime
        })
    }
    
    const getListStorage = () => {
        const storage = localStorage.getItem('state')
        // console.log('watch state get', storage)
        const storagePayload = storage ? JSON.parse(storage) : initialState
        dispatch({
          type: GET_STORAGE,
          payload: storagePayload
        });
      }
    
    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state))
        // console.log('watch state set', state)
    })

    return <WatchListContext.Provider
        value={{
            watchList: state.watchList,
            addListItem,
            removeListItem,
            getListStorage
        }}
    >
        {props.children}
    </WatchListContext.Provider>
}

export default WatchListState