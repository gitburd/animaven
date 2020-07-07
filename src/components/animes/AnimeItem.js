import React from 'react'
import {Link} from "react-router-dom"

const AnimeItem = ({ anime: { attributes, id }}) => {
    return (
        <div className='card shadow text-center'>
          <img
            src={attributes.posterImage.small}
            alt=''
            className='round-img'
            style={{ width: '150px' }}
          />
          <h3> {attributes.canonicalTitle} </h3>
          {
            attributes && attributes.titles && attributes.titles.en != attributes.canonicalTitle &&
              <h3> {attributes.titles.en} </h3>
          }    
          <div>
            <Link to={`/anime/${id}`} className='btn btn-dark btn-sm my-1'>
              More
            </Link>
          </div>
        </div>
      );
    };

export default AnimeItem
