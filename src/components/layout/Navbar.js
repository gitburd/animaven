import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-dark" >
            <h1 className='bold-header-text'>
                <i className="fas fa-dragon"></i> Animaven
            </h1>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
                <li>
                    <Link to='/about'>About</Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar

// rce : class based componet export bottom