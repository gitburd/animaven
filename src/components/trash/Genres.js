import React, {useContext} from 'react'
import GenreItem from './GenreItem'
import KitsuContext from '../../context/kitsu/kitsuContext'

export const Genres = () => {
    const kitsuContext = useContext(KitsuContext)
    const { genres } = kitsuContext
    
    return (
        <div>
            <h1>gens</h1>
            {/* {genres && genres.map(genre => 
            
            <GenreItem genre={genre} key={genre.id} id={genre.id}/>)} */}
       
        </div>
        
    )

}
