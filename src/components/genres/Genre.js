import React, {useContext,useEffect} from 'react'
import AnimeItem from '../animes/AnimeItem'
import KitsuContext from '../../context/kitsu/kitsuContext'
import Spinner from '../layout/Spinner'

const Genre = ({match}) => {
    const kitsuContext = useContext(KitsuContext)
    const { getGenreAnimes, genreAnimes, loading } = kitsuContext

    useEffect(( )=> {
        getGenreAnimes(match.params.name,0)
        //eslint-disable-next-line  
    }, [])
    
    if(loading) return <Spinner/>

    return (
        <div style={{margin:'20px 40px'}}>
            <h1 className="bold-header-text text-light">{match.params.name}</h1>
            <div className='anime-grid'>
                {genreAnimes && genreAnimes.map(anime =>
                    <AnimeItem
                        key={anime.id}
                        anime={anime}
                    /> 
                )}
            </div>
        </div>
        
    )

}

export default Genre