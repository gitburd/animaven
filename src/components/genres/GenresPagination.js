import React from 'react'

const GenresPagination = ({genresPerPage, totalGenres, paginate, currentPage}) => {
    const pageNumbers =[];
    
    for(let i =1; i <= Math.ceil(totalGenres/genresPerPage); i++){
        pageNumbers.push(i);
    }

    return (
        <div style={{ paddingLeft: '30px'}}>
            <ul className='pagination bold-header-text '>
                <li>{' '}</li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <p className={number === currentPage ? 'active':''} onClick={()=> paginate(number)}>
                        {number}
                        </p> 
                    </li>
                ))} 
            </ul>

        </div>     
    )
}

export default GenresPagination