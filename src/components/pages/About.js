import React from 'react'

const About = () => {
    return (
        <div className='genres'>
            <div className='text-dark-back p-1'>
                <h1>About this App</h1>
                <h3>Discover new Animes!</h3>

                <p>Search animes by title or browes through genres. All data comes from the <a target="_blank" href='https://kitsu.docs.apiary.io/#'>Kitsu API</a></p>
                <p>version 1.0.0</p>
            </div>

        </div>
    )
}

export default About


//improvements: 
//pagination? 
//-future like btn and post to like /rate