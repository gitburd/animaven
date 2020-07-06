import React, {useContext, useState} from 'react'
import KitsuContext from '../../context/kitsu/kitsuContext'
import GenresPagination from './GenresPagination'

const GenresList = () => {
    
    const kitsuContext = useContext(KitsuContext)
    const {genresList, getGenreAnimes} = kitsuContext
    const [currentPage, setCurrentPage] = useState(1);
    const [genresPerPage, setGenresPerPage] = useState(12);
    const indexOfLastGenre = currentPage * genresPerPage;
    const indexOfFirstGenre = indexOfLastGenre - genresPerPage;
    const currentGenres = genresList ? genresList.slice(indexOfFirstGenre,indexOfLastGenre) : []
    const paginate = (pageNumber) => setCurrentPage(pageNumber)


    const getAnimes = (e,g) => {
        e.preventDefault()
        getGenreAnimes(g,0)
    }
    return (
        <div>
            <div className="light-container">
            <h2 className='bold-header-text text-dark float-left' style={{textDecoration:'underline', clear:'both'}}>
                Genres
            </h2>
            <GenresPagination 
                genresPerPage={genresPerPage} 
                totalGenres={genresList && genresList.length}
                paginate={paginate}
                currentPage={currentPage}
            />
            <div className='genre-grid'>
                { currentGenres && currentGenres.map(g=>(
                    <h3 key={g} className='btn btn-dark btn-sm my-1' onClick={(e)=>getAnimes(e,g)}>{g}</h3> 
                ))}
            </div>
        </div>
        </div>
        
    )
}

export default GenresList
