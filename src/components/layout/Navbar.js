import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <nav className="navbar bg-dark" >
            <h1 className='bold-header-text'>
            <Link to='/'><i className="fas fa-dragon"></i> Animaven</Link>
            </h1>
        </nav>
    )
}

export default Navbar
