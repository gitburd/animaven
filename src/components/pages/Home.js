import React, {useContext, useEffect} from 'react'
import Animes from '../animes/Animes'
import GenresList from '../genres/GenresList'
import Search from '../animes/Search'
import About from './About'
import KitsuContext from '../../context/kitsu/kitsuContext'
import WatchList from '../watchList/WatchList'

 const Home = () => {
    const kitsuContext = useContext(KitsuContext)
    const { animes, genreAnimes, getStorage } = kitsuContext
    
    useEffect(() => {
        // eslint-disable-next-line
        getStorage()
    }, []);

    return (
        <div className="wrapper">
            <div className="left">
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