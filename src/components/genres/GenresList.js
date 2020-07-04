import React, {useContext, useState} from 'react'
import {Link} from "react-router-dom"
import KitsuContext from '../../context/kitsu/kitsuContext'
import GenresPagination from './GenresPagination'

const GenresList = () => {
    
    const kitsuContext = useContext(KitsuContext)
    const {genresList} = kitsuContext
    const [currentPage, setCurrentPage] = useState(1);
    const [genresPerPage, setGenresPerPage] = useState(12);
    const indexOfLastGenre = currentPage * genresPerPage;
    const indexOfFirstGenre = indexOfLastGenre - genresPerPage;
    const currentGenres = genresList.slice(indexOfFirstGenre,indexOfLastGenre)
    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    return (
        <div id="genres">
            <h1 className='bold-header-text text-dark' style={{textDecoration:'underline', float:'left'}}>
                Genres
            </h1>
            <GenresPagination 
                genresPerPage={genresPerPage} 
                totalGenres={genresList.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            <div className='genre-grid'>
                { currentGenres && currentGenres.map(g=>(
                    <Link key={g} to={`/genre/${g}`} className='btn btn-dark btn-sm my-1'>
                        <h3>{g}</h3> 
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default GenresList
