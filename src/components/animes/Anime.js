import React, { useEffect, useContext, Fragment } from 'react'
import Spinner from '../layout/Spinner'
import {Link} from "react-router-dom"
import KitsuContext from '../../context/kitsu/kitsuContext'

const Anime = ({match}) => {
    const kitsuContext = useContext(KitsuContext)
    const { anime, loading, genres, getAnime, getGenres} = kitsuContext
    const { attributes } = anime 

    useEffect(( )=> {
        
        getAnime(match.params.id)
        getGenres(match.params.id)
        //eslint-disable-next-line  
    }, [])
    
    const {
       
    } = anime

    if(loading) return <Spinner/>
    return (
        <Fragment>
            <Link to='/' className='btn btn-dark'>
                Back To Search
            </Link>

            <div className='shadow card grid-2' style={{margin:'40px'}}>
                <div className='all-center'>
                    {
                        attributes &&
                        <img
                            src={attributes.posterImage.large}
                            // className='round-img'
                            alt=''
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
                <h2 className='bold-header-text text-light' style={{textDecoration:'underline'}}>Genres</h2>

                
                {genres && genres.map(gen=>(
                    <Link key={gen.attributes.name} to={`/genre/${gen.attributes.name}`} className='btn btn-dark btn-sm my-1' style={{margin:'10px'}}>
                        <h3>{gen.attributes.name}</h3> 
                    </Link>
                ))}
            
            </div>

        </Fragment>
    )
}

export default Anime
