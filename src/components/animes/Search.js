import React, { useState, useContext } from 'react'
import KitsuContext from '../../context/kitsu/kitsuContext'

const Search = () => {
    const kitsuContext = useContext(KitsuContext)
    const {searchAnimes} = kitsuContext
    
    const [text,setText] = useState('')

    const onChange = e => {
     setText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        searchAnimes(text);
        setText('')
    }

    return (
        <div>
            <form  onSubmit={onSubmit} className="form">
                <input 
                type="text" 
                name="text" 
                placeholder="Search titles..."
                value={text}
                required
                onChange={onChange}
                />
                <input 
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark btn-block"
                />
            </form>
        </div>
    )
}

export default Search
