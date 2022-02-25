import React from 'react';
import { NavLink } from 'react-router-dom';

function Header() {
    return (
        <div>
            <NavLink to={'/pre-junior'}>PRE_JUNIOR</NavLink>
            <NavLink to={'/junior'}>JUNIOR</NavLink>
            <NavLink to={'/junior-plus'}>JUNIOR_PLUS</NavLink>
        </div>
    )
}

export default Header
