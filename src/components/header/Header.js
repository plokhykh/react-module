import React from 'react';
import {Link} from "react-router-dom";

import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <Link to={'users'}>users</Link>
            <Link to={'posts'}>posts</Link>
            <Link to={'comments'}>comments</Link>
            <Link to={'cars'}>cars</Link>
        </div>
    );
};

export default Header;
