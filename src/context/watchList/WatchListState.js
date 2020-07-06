import React, {useReducer, useEffect} from 'react'
import WatchListContext from './watchListContext'
import WatchListReducer from './watchListReducer'
import {
    ADD_LIST_ITEM,
    GET_STORAGE
}from '../types'

const WatchListState = props => {
    const initialState = {
       watchList:[]
    }
    
    const [state, dispatch] = useReducer(WatchListReducer, initialState)

    const addListItem = (e, anime) => {
        dispatch({
           type:ADD_LIST_ITEM,
           payload:anime
        })
    }

    const getStorage = () => {
        const storage = localStorage.getItem('state')
        const storagePayload = storage ? JSON.parse(storage) : initialState
        dispatch({
          type: GET_STORAGE,
          payload: storagePayload
        });
      }
    
    useEffect(() => {
        localStorage.setItem("state", JSON.stringify(state))
    })

    return <WatchListContext.Provider
        value={{
            watchList: state.watchList,
            addListItem,
            getStorage
        }}
    >
        {props.children}
    </WatchListContext.Provider>
}

export default WatchListState