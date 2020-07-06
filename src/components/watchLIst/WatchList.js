import React, {useContext, useEffect} from 'react'
import {Link} from "react-router-dom"
import WatchListContext from '../../context/watchList/watchListContext'

const WatchList = () => {
    const watchListContext = useContext(WatchListContext)
    const {watchList, getStorage} = watchListContext

    useEffect(() => {
        // eslint-disable-next-line
        getStorage()
    }, []);

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
                                    <li> {item.title} </li>
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
