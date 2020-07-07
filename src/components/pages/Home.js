import React, {useContext, useEffect} from 'react'
import Animes from '../animes/Animes'
import GenresList from '../genres/GenresList'
import Search from '../animes/Search'
import About from './About'
import KitsuContext from '../../context/kitsu/kitsuContext'
import WatchListContext from '../../context/watchList/watchListContext'
import WatchList from '../watchList/WatchList'

 const Home = () => {
    const kitsuContext = useContext(KitsuContext)
    const {animes, genreAnimes, getStorage, searchAnimes, search, genre, getGenreAnimes} = kitsuContext
      
    const watchListContext = useContext(WatchListContext)
    const { getListStorage, watchList } = watchListContext
    
    useEffect(() => {
      getStorage()
      getListStorage()
      console.log(search)
      if(genre){getGenreAnimes(genre,0)}
      if(search){searchAnimes(search,0)};
      // eslint-disable-next-line
    }, []);

    return (
        <div className="wrapper">
            <div className="left bkg-light">
                {(!animes || animes.length === 0) && (!genreAnimes || genreAnimes.length === 0) && (
                    <About/>
                )}
                    <Search/>
                    <Animes/>
                    <GenresList/>
            </div>
            {(search || genre || watchList) && (
                <div className="right">
                    <WatchList/>    
                </div>
            )}
        </div>
    )
}

export default Home