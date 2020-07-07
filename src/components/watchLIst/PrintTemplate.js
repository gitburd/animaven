import React, {useContext, useEffect} from 'react'
import WatchListContext from '../../context/watchList/watchListContext'

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
                <a 
                    className='bold-header-text'
                    style={{color:'#EAE6F4', textDecoration:'underline'}}
                    href='https://animaven.netlify.app/'>
                    <h1>Animaven</h1>
                </a>
                
                <h2>Watch List</h2>
            </div>
            <div className="light-container" >
                {watchList && watchList.length > 0 && 
                    <ul>
                        { watchList.map((item, idx) => (
                            <div key={idx}>
                                <a href={`https://animaven.netlify.app/anime/${item.id}`}>
                                    <li> 
                                        <span className='listItem'>{item.title}</span> 
                                    </li>
                                </a>
                            </div>
                        ))}
                    </ul>
                }
            </div>
        </div>
        
    )
}

export default PrintTemplate
