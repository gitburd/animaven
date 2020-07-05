import React, {useContext} from 'react'
import KitsuContext from '../../context/kitsu/kitsuContext'


const AnimesPagination = ({paginate, currentPage, search, genre}) => {
    const kitsuContext = useContext(KitsuContext);
    const {dataCount} = kitsuContext;
    const pageNumbers = []; 
    
    for(let i = 1, count = dataCount; count >= 0 && i <= 15; i++, count-=15){
        pageNumbers.push(i);
    }
    
    return (
        <div className='dark-container'>
            {search &&  
                <h2 className="bold-header-text text-light float-left">
                    " {search} "
                </h2>
            }
            {genre &&  
                <h2 className="bold-header-text text-light float-left">
                     {genre} 
                </h2>
            }
            
            <ul className='pagination bold-header-text float-left'>
                <li>{' '}</li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <h3 className={number === currentPage ? 'active':'text-light'} onClick={()=> paginate(number)}>
                        {number}
                        </h3> 
                    </li>
                ))} 
            </ul>
        </div>     
    )
}

export default AnimesPagination