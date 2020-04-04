import React from 'react'

const Pagination = ({genresPerPage, totalGenres, paginate, currentPage}) => {
    const pageNumbers =[];
    
    for(let i =1; i <= Math.ceil(totalGenres/genresPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <ul className='pagination'>
           {pageNumbers.map(number => (
               <li key={number}>
                    <h3 className={number === currentPage ? 'active':''} onClick={()=> paginate(number)}>
                      {number}
                    </h3> 
               </li>
           ))} 
        </ul>
    )
}

export default Pagination