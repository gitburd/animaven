import React from 'react'

const Pagination = ({genresPerPage, totalGenres, paginate, currentPage}) => {
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
                            <h2 className={number === currentPage ? 'active':''} onClick={()=> paginate(number)}>
                            {number}
                            </h2> 
                    </li>
                ))} 
            </ul>

        </div>     
    )
}

export default Pagination