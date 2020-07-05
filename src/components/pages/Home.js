import React, {useContext} from 'react'
import Animes from '../animes/Animes'
import GenresList from '../genres/GenresList'
import Search from '../animes/Search'
import About from './About'
import KitsuContext from '../../context/kitsu/kitsuContext'
import WatchList from '../watchLIst/WatchList'

 const Home = () => {
    const kitsuContext = useContext(KitsuContext)
    const { animes, genreAnimes } = kitsuContext
    return (
        <div className="wrapper">
            <div class="left">
                {(!animes || animes.length === 0) && (!genreAnimes || genreAnimes.length === 0) && (
                    <About/>
                )}
                    <Search/>
                    <Animes/>
                    <GenresList/>
            </div>
            <div className="right">
                <WatchList/>    
            </div>
        </div>
    )
}

export default Home