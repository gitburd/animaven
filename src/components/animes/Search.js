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
        <div style={{margin:'20px 40px'}}>
            <div style={{width:'50%'}}>
                <input 
                    type="text" 
                    name="text" 
                    placeholder="Search titles..."
                    value={text}
                    required
                    onChange={onChange}
                />
            </div>
            <div style={{width:"130px",marginLeft: "52%", marginTop: "-56px"}}>
                <a 
                    href="#" 
                    data-role="button" 
                    data-mini="true"
                    type="submit" 
                    value="Search" 
                    className="btn btn-dark"
                    onClick={onSubmit}

                >Search</a>
            </div>             
        </div>
    )
}

export default Search
