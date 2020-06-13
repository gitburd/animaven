import React, {useContext, useState, useEffect} from 'react'
import AnimeItem from './AnimeItem'
import Spinner from '../layout/Spinner'
import KitsuContext from '../../context/kitsu/kitsuContext'
import AnimesPagination from './AnimesPagination'

const Animes = () => {
    const kitsuContext = useContext(KitsuContext)
    const {animes, loading, search, searchAnimes, resultsError} = kitsuContext
    const [currentPage, setCurrentPage] = useState(1)
    const paginate = (pageNumber) =>  {
        setCurrentPage(pageNumber)
        const offset = (pageNumber - 1) * 20 
        searchAnimes(search,offset);
    }

    useEffect(() => {
        setCurrentPage(1);
    }, [search]);

    if(loading){
        return<Spinner/>
    } else {
        return (
            <>
            <div>
                {animes && animes.length>0 && (
                    <AnimesPagination
                        paginate={paginate}
                        currentPage={currentPage}
                        search={search}
                    />
                )}
            </div>
            <div>
                {resultsError && (
                    <h1>No results found.</h1>
                )}
            </div>

            <div className='anime-grid' style={{margin:'20px 40px', clear:'both'}}>
                {animes.map(anime => (
                 <AnimeItem
                    key={anime.id}
                    anime={anime}
                 />
                ))}
            </div>

            <div>
                {animes && animes.length>0 && (
                    <AnimesPagination
                        paginate={paginate}
                        currentPage={currentPage}
                        search={search}
                    />
                )}
            </div>
            </>
        )
    }
}
 
export default Animes
