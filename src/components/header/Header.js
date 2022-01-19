import React from 'react';
import {NavLink} from "react-router-dom";

import "./Header.css"

export const Header = () => {

    return (
        <div className='header-wrapper'>
            <NavLink to='/users' className='header-link'>Users</NavLink>
            <NavLink to='/posts' className='header-link'>Posts</NavLink>
        </div>
    );
};

