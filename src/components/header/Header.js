import React from 'react';
import {Link} from "react-router-dom";

import logo from '../../images/logo.png';

import './Header.css';

const Header = () => {
    return (
        <div className={'header'}>

            <Link to={'/'}>
                <img src={logo} alt="logo"/>
            </Link>

            <div className={'header-links'}>
                <Link to={'episodes'}>Episodes</Link>
                <Link to={'locations'}>Locations</Link>
            </div>


        </div>
    );
};

export default Header;
