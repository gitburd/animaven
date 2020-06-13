import React, {useContext} from 'react'
import Animes from '../animes/Animes'
import GenresList from '../genres/GenresList'
import Search from '../animes/Search'
import KitsuContext from '../../context/kitsu/kitsuContext'

 const Home = () => {
    const kitsuContext = useContext(KitsuContext)
    const { animes } = kitsuContext
    return (
        <div>
            <Search/>
            <Animes/>
            {animes && animes.length === 0 && 
                <GenresList/>
            }
        </div>
    )
}

export default Home