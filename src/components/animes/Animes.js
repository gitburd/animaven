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
            <div className='anime-grid'>
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
 
export default Animes
