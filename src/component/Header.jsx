import React from 'react'
import { NavLink } from 'react-router-dom'
const Header = () => {
  return (
    <div>
        <header>
            <a href="/">Logo</a>
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/About">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="/Contact">Contact</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    </div>
  )
}

export default Header