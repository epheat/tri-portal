import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/images/TriLogo.png';

const Navbar = ({ fixed }) => {
    return (
        <div className="tri-navbar">
            <NavLink className="brand" to="/">
                <img src={ Logo } />
            </NavLink>

            <ul className="nav-items">
                <li>
                    <NavLink to="/">Link1</NavLink>
                </li>
                <li>
                    <NavLink to="/">Link1</NavLink>
                </li>
                <li>
                    <NavLink to="/">Link1</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Navbar;