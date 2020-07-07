import React, { useEffect, useContext, Fragment } from 'react'
import {Link} from "react-router-dom"
import Spinner from '../layout/Spinner'
import WatchList from '../watchList/WatchList'
import KitsuContext from '../../context/kitsu/kitsuContext'
import WatchListContext from '../../context/watchList/watchListContext'

const Anime = ({match}) => {
    const kitsuContext = useContext(KitsuContext)
    const { anime, loading, genres, getAnime, getGenreAnimes, getGenres,  setGenre, getStorage} = kitsuContext

    const watchListContext = useContext(WatchListContext)
    const {addListItem, getListStorage}= watchListContext

    useEffect(( )=> {
        getAnime(match.params.id)
        getStorage()
        getListStorage()
        //eslint-disable-next-line  
    }, [])

    const getAnimes = (e,genre) => {
        e.preventDefault()
        console.log('an',genre)
        setGenre(genre)
    }

    const addToList = (e, anime) => {
        let title = anime.attributes.canonicalTitle

        if(anime.attributes.titles.en && anime.attributes.titles.en !== anime.attributes.canonicalTitle && anime.attributes.titles.en !== ''){
            title += ` (${anime.attributes.titles.en})`
        }
       
        const newAnime = { 
            id: anime.id,
            title: title
        }
        addListItem(e, newAnime)
    }
    
    if(loading) return <Spinner/>
    return (
        <div className="wrapper">
            <div className="left">
                <Link to='/' className='btn btn-dark'>
                    Back To Search
                </Link>
                <button 
                    className='btn btn-light'
                    onClick = {(e)=>addToList(e, anime)}
                >
                    Add to watch List 
                </button>
                <div className='shadow card '>
                    <div className='all-center'>
                        {   anime && anime.attributes &&
                            <img
                                src={anime.attributes.posterImage.large}
                                alt={anime.attributes.canonicalTitle}
                                style={{ width: '250px' }}
                            />
                        }
                        
                        <h1>{anime && anime.attributes && anime.attributes.canonicalTitle}</h1>      
                        {
                            anime && anime.attributes && anime.attributes.titles && anime.attributes.titles.en != anime.attributes.canonicalTitle &&
                                <h2> {anime.attributes.titles.en} </h2>
                        }             
                    </div>
                    <div>
                        <h2 className='bold-header-text text-dark' style={{textDecoration:'underline'}}>Synopsis</h2>
                        <p>{anime && anime.attributes && anime.attributes.synopsis }</p>
                        <ul>
                            <li>
                            {anime && anime.attributes && (
                                anime.attributes.nextRelease !== null ?
                                <Fragment>
                                <strong>Upcoming release: </strong> {anime.attributes.nextRelease}
                                </Fragment>
                                :
                                <></>
                            )}
                            </li>

                            <li>
                            {anime && anime.attributes  && (
                                <Fragment>
                                <strong>Finished: </strong> {anime.attributes.status === 'finished' ? (
                                    <i className='fas fa-check text-success' />
                                    ) : (
                                    <i className='fas fa-times-circle text-danger' />
                                )}
                                </Fragment>
                            )}
                            </li>

                            <li>
                            {anime && anime.attributes  && (
                                <Fragment>
                                <strong>Show Type: </strong> {anime.attributes.showType}
                                </Fragment>
                            )}
                            </li>

                            <li>
                            {anime && anime.attributes  && (
                                <Fragment>
                                <strong>Episode Count: </strong> {anime.attributes.episodeCount}
                                </Fragment>
                            )}
                            </li>

                            <li>
                            {anime && anime.attributes  && (
                                <Fragment>
                                <strong>Age Rating Guide: </strong> {anime.attributes.ageRatingGuide}
                                </Fragment>
                            )}
                            </li>

                            <li>
                            {anime && anime.attributes  && (
                                <Fragment>
                                <strong>Work Safe: </strong> {anime.attributes.nsfw === false ? (
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
                    <div className='badge badge-danger'>Favorites: {anime && anime.attributes  && anime.attributes.favoritesCount }</div>
                    <div className='badge badge-success'>Popularity Rank: {anime && anime.attributes  && anime.attributes.popularityRank }</div>
                    <div className='badge badge-dark'>Average Rating: {anime && anime.attributes  && anime.attributes.averageRating }</div>      
                </div> 

                <div style={{float:'left', display:'block', margin:'40px'}}>
                    {genres && genres.map(gen=>(
                            <h3   
                                key={gen.id}
                                style={{margin:'10px'}}
                                className='btn btn-dark btn-sm my-1'
                                onClick={(e)=>getAnimes(e, gen.attributes.name)} 
                            >
                                <Link to="/">
                                    
                                    {gen.attributes.name}    
                                    
                                </Link>   
                            </h3>                                
                                
                           
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