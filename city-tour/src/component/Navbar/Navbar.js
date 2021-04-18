import React from 'react';
import './navbar.scss'
import logo from '../../logo.svg'

export default function Navbar(){

    return(
        <div>
               <nav className ='navbar'>
                   <img src={logo} alt ="city tour logo"/>
                   <ul className="nav-links">
                        <li>
                            <a href ="/" className="nav-link">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href ="/about" className="nav-link">
                                About
                            </a>
                        </li>
                        <li>
                            <a href ="/tours" className="nav-link">
                                Tours
                            </a>
                        </li>

                   </ul>

               </nav>
        </div>
    )
}