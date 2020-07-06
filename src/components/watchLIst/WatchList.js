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
            <div className="text-dark-back p-1">
                <h1>Watch List</h1>
            </div>
            <div className="light-container">
                {!watchList || (watchList && watchList.length === 0) && (
                    <>
                        <p>Nohting yet!</p>
                        <p> Start searching to find stuff</p>
                    </>
                )}

                {watchList && watchList.length > 0 && 
                    <ul>
                        { watchList.map((item, idx) => (
                            <div key={idx}>
                                 <Link to={`/anime/${item.id}`}>
                                    <li> 
                                       <span className='listItem'>{item.title}</span> 
                                        <i 
                                            onClick = {(e)=>removeFromList(e,item.id)}
                                            className="far fa-times-circle"
                                            style={{color:'#27034a', paddingLeft:'10px'}}
                                        >
                                        </i>
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
