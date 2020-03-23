import React, {useContext} from 'react'
import AnimeItem from './AnimeItem'
import Spinner from '../layout/Spinner'
import KitsuContext from '../../context/kitsu/kitsuContext'


const Animes = () => {
    const kitsuContext = useContext(KitsuContext)
    const {animes, loading} = kitsuContext

    if(loading){
        return<Spinner/>
    } else {
        return (
            <div style={animeStyle}>
                {animes.map(anime => (
                 <AnimeItem
                    key={anime.id}
                    anime={anime}
                 />
                ))}
            </div>
        )
    }
}

const animeStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gridGap: '1rem',
    color:'rgba(27, 24, 38, 1)'
  };  

export default Animes
