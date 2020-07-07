import React, {useContext, useEffect} from 'react'
import WatchListContext from '../../context/watchList/watchListContext'
import {Link} from "react-router-dom"

const PrintTemplate = () => {
    const watchListContext = useContext(WatchListContext)
    const {watchList,  getListStorage} = watchListContext

    useEffect(() => {
        getListStorage()
        // eslint-disable-next-line
    }, []);


    return (
        <div>
            <div className="text-dark-back p-1">
            <Link to='/' 
                className='bold-header-text'
                style={{color:'#EAE6F4', textDecoration:'underline'}}
            >
                <h1>Animaven</h1>
            </Link>
                
                <h2>Watch List</h2>
            </div>
            <div className="light-container" >
                {watchList && watchList.length > 0 && 
                    <ul>
                        { watchList.map((item, idx) => (
                            <div key={idx}>
                                <li> 
                                    <span className='listItem'>{item.title}</span> 
                                </li>
                            </div>
                        ))}
                    </ul>
                }
            </div>
        </div>
        
    )
}

export default PrintTemplate
