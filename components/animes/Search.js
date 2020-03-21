import React, { useState, useContext } from 'react'
import GithubContext from '../../context/github/githubContext'

const Search = () => {
    const githubContext = useContext(GithubContext)
    const {users, searchUsers, clearUsers} = githubContext
    const [text,setText] = useState('')

    const onChange = e => {
     setText(e.target.value)
    }

    const onSubmit = e => {
        e.preventDefault();
        searchUsers(text);
        setText('')
    }

    return (
        <div>
            <form  onSubmit={onSubmit} className="form">
                <input 
                type="text" 
                name="text" 
                placeholder="Search..."
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
            { users.length > 0 && <button className="btn light-btn btn-block" onClick={clearUsers} >Clear</button> }
            
        </div>
    )
}

export default Search
