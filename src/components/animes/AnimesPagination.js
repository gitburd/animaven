import React, {useContext} from 'react'
import KitsuContext from '../../context/kitsu/kitsuContext'


const AnimesPagination = ({paginate, currentPage, search, genre}) => {
    const pageNumbers = genre ? [] : [1,2,3,4,5,6,7,8,9,10];
    const kitsuContext = useContext(KitsuContext);
    const {genreLimits} = kitsuContext;

    if(genre){
        console.log(genreLimits, genre, genreLimits["Zombies"])
        for(let i =1; i <= genreLimits[genre]; i++){
            pageNumbers.push(i);
        }
    }
    
    return (
        <div style={{ marginLeft: '40px', padding:'10px', float:'left', backgroundColor:'hsla(270, 92%, 15%, 0.9)'}}>
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