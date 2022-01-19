import React from 'react';
import {NavLink} from "react-router-dom";


export const UsersList = ({ user }) => {

    const { id, name } = user;

    return (
        <div>
            <NavLink to={id.toString()} state={user}>
                {id}. {name}
            </NavLink>
        </div>
    );
};

