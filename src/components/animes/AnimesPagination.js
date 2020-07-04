import React, {useContext} from 'react'
import KitsuContext from '../../context/kitsu/kitsuContext'


const AnimesPagination = ({paginate, currentPage, search, genre}) => {
    const kitsuContext = useContext(KitsuContext);
    const {dataCount} = kitsuContext;
    const pageNumbers = []; 
    
    for(let i = 1, count = dataCount; count >= 0 && i <= 20; i++, count-=15){
        pageNumbers.push(i);
    }
    
    return (
        <div style={{ margin:'40px', padding:'10px', float:'left', backgroundColor:'hsla(270, 92%, 15%, 0.9)'}}>
            {search &&  
                <h1 className="bold-header-text text-light " style={{ float:'left'}}>
                    " {search} "
                </h1>
            }
            {genre &&  
                <h1 className="bold-header-text text-light " style={{ float:'left'}}>
                     {genre} 
                </h1>
            }
            
            <ul className='pagination bold-header-text' style={{float:'left'}}>
                <li>{' '}</li>
                {pageNumbers.map(number => (
                    <li key={number}>
                        <h2 className={number === currentPage ? 'active':'text-light'} onClick={()=> paginate(number)}>
                        {number}
                        </h2> 
                    </li>
                ))} 
            </ul>
        </div>     
    )
}

export default AnimesPagination