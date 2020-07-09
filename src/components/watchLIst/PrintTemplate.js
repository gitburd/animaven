import React, {useContext, useEffect} from 'react'
import WatchListContext from '../../context/watchList/watchListContext'
import {Link} from "react-router-dom"
import animaven from '../../img/animaven.png'

const PrintTemplate = ({title, comments}) => {
    const watchListContext = useContext(WatchListContext)
    const {watchList,  getListStorage} = watchListContext

    useEffect(() => {
        getListStorage()
        // eslint-disable-next-line
    }, []);

    return (
        <div>
            <Link to='/' 
                className='bold-header-text'
            >
                <img 
                    src={animaven}
                    style={{width:'100%', margin:'0', padding:'0'}}
                />
            </Link>
            {title && title !== '' &&
                <div className="text-dark-back p-1" style={{marginTop:'-10px'}}>
                    <h2>{title}</h2>
                </div>
            }
            
            <div style={{padding:'20px 0 0 50px'}}>
                {watchList && watchList.length > 0 && 
                    <ul className='printList'>
                        { watchList.map((item, idx) => (
                            <div key={idx}>
                                <li> 
                                    <span>{item.title}</span> 
                                </li>
                            </div>
                        ))}
                    </ul>
                }

                {comments && (
                    <>
                        <hr style={{  margin:'30px 50px 0 0'}}/>
                        <p style={{fontFamily:'times', color:'#505050'}}>
                            Comments:  {comments} 
                        </p>
                    </>
                )}
                            
            </div>
        </div>
    )
}

export default PrintTemplate
