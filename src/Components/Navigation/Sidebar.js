
import React from 'react';
import { NavLink }  from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

export default () =>
    <nav id="sidebar">
        <ul className="list-unstyled components">
            <li>
                <NavLink to="/"><FontAwesome name="chart-bar" /> Dashboard</NavLink>
            </li>
            <li>
                <NavLink to="/projects"><FontAwesome name="briefcase" /> Projects</NavLink>
            </li>
            <li>
                <NavLink to="/teams"><FontAwesome name="users" /> Teams</NavLink>
            </li>
        </ul>
    </nav>