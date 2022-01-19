import React from 'react';
import {Link, NavLink} from "react-router-dom";


export const UsersList = ({ user }) => {

    const { id, name } = user;

    return (
        <div>
            <NavLink to={id.toString()} state={user}>
                {id}. {name} <Link to={`${id.toString()}/albums`}><button>get albums</button></Link>
            </NavLink>
        </div>
    );
};

