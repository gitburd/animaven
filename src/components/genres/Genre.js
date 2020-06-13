import React, {useContext,useEffect, useState} from 'react'
import AnimeItem from '../animes/AnimeItem'
import KitsuContext from '../../context/kitsu/kitsuContext'
import Spinner from '../layout/Spinner'
import AnimesPagination from '../animes/AnimesPagination'

const Genre = ({match}) => {
    const kitsuContext = useContext(KitsuContext)
    const { getGenreAnimes, genreAnimes, loading } = kitsuContext
    // const {animes, loading, search, searchAnimes} = kitsuContext
    const [currentPage, setCurrentPage] = useState(1)
    
    const paginate = (pageNumber) =>  {
        setCurrentPage(pageNumber)
    }

    useEffect(( )=> {
        const offset = (currentPage - 1) * 20 
        getGenreAnimes(match.params.name,offset)
        //eslint-disable-next-line  
    }, [currentPage])
    
    if(loading) return <Spinner/>

    return (
        <div >
            <AnimesPagination
                paginate={paginate}
                currentPage={currentPage}
                genre={match.params.name}
            />
            
            <div className='anime-grid' style={{margin:'40px'}}>
                {genreAnimes && genreAnimes.map(anime =>
                    <AnimeItem
                        key={anime.id}
                        anime={anime}
                    /> 
                )}
            </div>

            <AnimesPagination
                paginate={paginate}
                currentPage={currentPage}
                genre={match.params.name}
            />
        </div>
    )
}

export default Genre