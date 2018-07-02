
import React from 'react';
import { NavLink }  from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

export default ({ navClick }) =>
    <nav className="navbar navbar-dark bg-dark">
        <span className="navbar-brand" onClick={navClick}>
            <FontAwesome name="bars" className="menu-icon" /> React Electron
        </span>
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <NavLink to="/messages" className="nav-link">
                    <FontAwesome name="envelope" size="lg" />
                </NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/settings" className="nav-link">
                    <FontAwesome name="cogs" size="lg" />
                </NavLink>
            </li>
        </ul>
    </nav>