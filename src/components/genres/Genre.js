import React, {useContext,useEffect} from 'react'
import AnimeItem from '../animes/AnimeItem'
import KitsuContext from '../../context/kitsu/kitsuContext'

const Genre = ({match}) => {
    const kitsuContext = useContext(KitsuContext)
    const { getGenreAnimes, genreAnimes } = kitsuContext

    useEffect(( )=> {
        getGenreAnimes(match.params.name)
        //eslint-disable-next-line  
    }, [])
    
    return (
        <div>
            <h1 className="bold-header-text text-dark">{match.params.name}</h1>
            <div style={animeStyle}>
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
const animeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(2, 1fr)',
    gridGap: '1rem',
    color:'rgba(27, 24, 38, 1)'
  }; 

export default Genre