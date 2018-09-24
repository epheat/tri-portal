import React from 'react';
import { NavLink } from 'react-router-dom';

import Logo from '../assets/images/TriLogo.png';

const Navbar = ({ fixed, user, signOut }) => {
    console.log(user);
    return (
        <div className="tri-navbar">
            <div className="row-links">
                <NavLink className="brand" to="/">
                    <img src={ Logo } />
                </NavLink>

                <ul className="nav-items">
                    <li>
                        <NavLink exact className="navlink" to="/">Home</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/members">Members</NavLink>
                    </li>
                    <li>
                        <NavLink className="navlink" to="/forum">Forum</NavLink>
                    </li>
                </ul>
            </div>
            <div className="row-actions">
                <div className="link-button" onClick={signOut}>Sign Out</div>
                <div className="greeting">
                    Hello, {user.username}! 
                </div>
            </div>
        </div>
    )
}

export default Navbar;