import React, {useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import WatchListContext from '../../context/watchList/watchListContext'

const WatchList = () => {
    const watchListContext = useContext(WatchListContext)
    const {watchList, removeListItem, getListStorage} = watchListContext

    useEffect(() => {
        getListStorage()
        // eslint-disable-next-line
    }, []);

    const removeFromList = (e, id) => {
        removeListItem(e,id)
    }
    
    return (
        <div>            
            <Link to='/print'>
                <button style={{float:'right', marginRight:'0'}} className='btn btn-light'>Save as PDF</button>
            </Link>
            
            <div  
                id="watchList" style={{ clear:'both', width:'100%'}}
            >
                <h1 className="text-dark-back p-1"> Watch List</h1>
                {!watchList || (watchList && watchList.length === 0) && (
                    <div className="light-container">
                        <p>Your list is empty.</p>
                        <p> Start searching to find animes!</p>
                    </div>
                )}
                {watchList && watchList.length > 0 && 
              
                    <ul className="light-container">
                        { watchList.map((item, idx) => (
                            <div key={idx} >
                                <i 
                                    onClick = {(e)=>removeFromList(e,item.id)}
                                    className="far fa-times-circle cancelIcon"
                                ></i>
                                <Link to={`/anime/${item.id}`}>
                                    <li style={{color:'red'}} > 
                                        <span className='listItem'>{item.title}</span> 
                                    </li>
                                </Link>
                            </div>
                        ))}
                    </ul>
                }
            </div>
        </div>
    )
}

export default WatchList
