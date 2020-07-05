import React, {useContext, useState, useEffect} from 'react'
import AnimeItem from './AnimeItem'
import Spinner from '../layout/Spinner'
import KitsuContext from '../../context/kitsu/kitsuContext'
import AnimesPagination from './AnimesPagination'

const Animes = () => {
    const kitsuContext = useContext(KitsuContext)
    const {animes, loading, search, genre, searchAnimes, genreAnimes, resultsError} = kitsuContext
    const [currentPage, setCurrentPage] = useState(1)
    const paginate = (pageNumber) =>  {
        setCurrentPage(pageNumber)
        const offset = (pageNumber - 1) * 15
        searchAnimes(search,offset);
    }
    const displayAnimes = animes && animes.length > 0 ? animes : genreAnimes;

    useEffect(() => {
        setCurrentPage(1);
    }, []);

    if(loading){
        return<Spinner/>
    } else {
        return (
            <>
            <div>
                {displayAnimes && displayAnimes.length >0 && (
                    <AnimesPagination
                        paginate={paginate}
                        currentPage={currentPage}
                        search={search}
                        genre={genre}
                    />
                )}
            </div>
            <div>
                {search && resultsError && (
                    <h1>No results found.</h1>
                )}
            </div>

            <div className='anime-grid' style={{margin:'20px 40px', clear:'both'}}>
                {displayAnimes.map(anime => (
                 <AnimeItem
                    key={anime.id}
                    anime={anime}
                 />
                ))}
            </div>

            <div>
            {displayAnimes && displayAnimes.length >0 && (
                    <AnimesPagination
                        paginate={paginate}
                        currentPage={currentPage}
                        search={search}
                        genre={genre}
                    />
                )}
            </div>
            </>
        )
    }
}
 
export default Animes
