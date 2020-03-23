import React, {useEffect, useContext} from 'react'
import {Link} from "react-router-dom"
import KitsuContext from '../../context/kitsu/kitsuContext'

const GenreItem = ({genre, id}) => {
    const kitsuContext = useContext(KitsuContext)
    const { genres, getGenreAnimes } = kitsuContext

    return (
        <div className='card'>
                      

            <h3>
                {genre.attributes.name}
                <Link to={`/genre/${genre.attributes.name}`} className='btn btn-dark btn-sm my-1'>
                 More
                </Link>
            </h3>
        </div>
    )
}

export default GenreItem