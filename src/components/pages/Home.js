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

    const showAbout = !watchList && (!animes || animes.length === 0) && (!genreAnimes || genreAnimes.length === 0)
    return (
        <div className="wrapper">
            <div className="left bkg-light">
                <Search/>
                <Animes/>
                <GenresList/>
            </div>
            
            <div className="right">
                {   showAbout ? 
                          <About/>
                        : <WatchList/>    
                }
            </div>
        </div>
    )
}

export default Home