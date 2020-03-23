import React, {Fragment} from 'react'
import Animes from '../animes/Animes'
import GenresList from '../genres/GenresList'
import Search from '../animes/Search'

 const Home = () => {
    return (
        <div>
            <Search/>
            <Animes/>
            <GenresList/>
        </div>
    )
}

export default Home