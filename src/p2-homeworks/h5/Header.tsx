import React from 'react';
import {NavLink} from 'react-router-dom';

import SuperButton from "../h4/common/c2-SuperButton/SuperButton";

function Header() {
    return (
        <div>
            <SuperButton><NavLink to={'/pre-junior'}>PRE_JUNIOR</NavLink></SuperButton>
            <SuperButton><NavLink to={'/junior'}>JUNIOR</NavLink></SuperButton>
            <SuperButton><NavLink to={'/junior-plus'}>JUNIOR_PLUS</NavLink></SuperButton>
        </div>
    )
}

export default Header
