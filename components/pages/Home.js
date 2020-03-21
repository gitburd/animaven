import React, {Fragment} from 'react'
import Animes from '../ainmes/Ainmes'
import Search from '../animes/Search'


export const Home = () => {
    return (
        <Fragment>
            <Search/>
            <Animes/>
        </Fragment>
    )
}
