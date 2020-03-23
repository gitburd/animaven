import React, {useContext} from 'react'
import {Link} from "react-router-dom"
import KitsuContext from '../../context/kitsu/kitsuContext'

const GenresList = () => {
    
    const kitsuContext = useContext(KitsuContext)
    const { genresList } = kitsuContext


    return (
        <div style={{padding:'10px', margin:'40px 0', backgroundColor:'hsla(0, 100%, 100%, 0.25)'}}>
            <h1 className='bold-header-text text-dark' style={{textDecoration:'underline'}}>Genres</h1>
            <div style={listStyle}>
                {
                    genresList.map(g=>(
                        <Link to={`/genre/${g}`} className='btn btn-dark btn-sm my-1'>
                            <h3>{g}</h3> 
                       </Link>
                   
                    ))
                }
            </div>
        </div>
    )
}

const listStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gridGap: '1.25rem'
  };  

export default GenresList
