import React, { useEffect, useContext, Fragment } from 'react'
import {Link} from "react-router-dom"
import Spinner from '../layout/Spinner'
import WatchList from '../watchList/WatchList'
import KitsuContext from '../../context/kitsu/kitsuContext'
import WatchListContext from '../../context/watchList/watchListContext'

const Anime = ({match}) => {
    const kitsuContext = useContext(KitsuContext)
    const { anime, loading, genres, getAnime, getGenreAnimes, getGenres} = kitsuContext
    const { attributes, id } = anime 

    const watchListContext = useContext(WatchListContext)
    const {addListItem} = watchListContext

    useEffect(( )=> {
        getAnime(match.params.id)
        // getGenres(match.params.id)
        //eslint-disable-next-line  
    }, [])

    const getAnimes = (e,genre) => {
        e.preventDefault()
        getGenreAnimes(genre,0)
    }
    const addToList = (e,  id, title) => {
        const anime ={
            id,
            title
        }
        addListItem(e, anime)
    }

    
    if(loading) return <Spinner/>
    return (
        <div className="wrapper">
            <div className="left">
                <Link to='/' className='btn btn-dark'>
                    Back To Search
                </Link>
                <button onClick = {(e)=>addToList(e, id, attributes.canonicalTitle)}>Add to watch List </button>
                <div className='shadow card '>
                    <div className='all-center'>
                        {
                            attributes &&
                            <img
                                src={attributes.posterImage.large}
                                alt={attributes.canonicalTitle}
                                style={{ width: '250px' }}
                                />
                        }
                        
                        <h1>{attributes && attributes.canonicalTitle}</h1>                   
                    </div>
                    <div>
                        <h2 className='bold-header-text text-dark' style={{textDecoration:'underline'}}>Synopsis</h2>
                        <p>{attributes && attributes.synopsis }</p>
                        <ul>
                            <li>
                            {attributes && (
                                attributes.nextRelease !== null ?
                                <Fragment>
                                <strong>Upcoming release: </strong> {attributes.nextRelease}
                                </Fragment>
                                :
                                <></>
                            )}
                            </li>

                            <li>
                            {attributes  && (
                                <Fragment>
                                <strong>Finished: </strong> {attributes.status === 'finished' ? (
                                    <i className='fas fa-check text-success' />
                                    ) : (
                                    <i className='fas fa-times-circle text-danger' />
                                )}
                                </Fragment>
                            )}
                            </li>

                            <li>
                            {attributes  && (
                                <Fragment>
                                <strong>Show Type: </strong> {attributes.showType}
                                </Fragment>
                            )}
                            </li>

                            <li>
                            {attributes  && (
                                <Fragment>
                                <strong>Episode Count: </strong> {attributes.episodeCount}
                                </Fragment>
                            )}
                            </li>

                            <li>
                            {attributes  && (
                                <Fragment>
                                <strong>Age Rating Guide: </strong> {attributes.ageRatingGuide}
                                </Fragment>
                            )}
                            </li>

                            <li>
                            {attributes  && (
                                <Fragment>
                                <strong>Work Safe: </strong> {attributes.nsfw === false ? (
                                    <i className='fas fa-check text-success' />
                                    ) : (
                                    <i className='fas fa-times-circle text-danger' />
                                )}
                                </Fragment>
                            )}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className='shadow card text-center'>
                    <div className='badge badge-danger'>Favorites: {attributes  && attributes.favoritesCount }</div>
                    <div className='badge badge-success'>Popularity Rank: {attributes  && attributes.popularityRank }</div>
                    <div className='badge badge-dark'>Average Rating: {attributes  && attributes.averageRating }</div>      
                </div> 

                <div style={{float:'left', display:'block', margin:'40px'}}>
                    {genres && genres.map(gen=>(
                    <h3 key={gen} className='btn btn-dark btn-sm my-1' onClick={(e)=>getAnimes(e,gen)}>{gen}</h3> 
                    ))}
                </div>
            </div>
            <div className="right">
                <WatchList/>    
            </div>
        </div>
    )
}

export default Anime