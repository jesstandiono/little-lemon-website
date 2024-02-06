import React, { useState } from 'react';
import logo from '../images/Logo.svg'
import hamicon from '../images/hamburger menu.svg'

const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a href='/' className='logo'>
                <img src={logo} alt='logo' />
            </a>

            {/* mobile nav icon */}
            <div className='menu-icon' onClick={toggleMenu}>
                <img src={hamicon} alt='hamicon' />
            </div>

            <ul className={`navlinks ${menuOpen ? "visible" : ""}`}>
                <li><a href='/'>Home</a></li>
                <li><a href='/'>About</a></li>
                <li><a href='/'>Menu</a></li>
                <li><a href='/booking'>Reservations</a></li>
                <li><a href='/'>Order Online</a></li>
                <li><a href='/'>Login</a></li>
            </ul>
        </nav>
    );
};

export default Nav;