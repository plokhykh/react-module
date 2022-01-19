import React from "react";
import {NavLink} from "react-router-dom";


export const UserAlbumsList = ({ id, title }) => {
    return (
        <div>
            <NavLink to={`${id.toString()}/photos`}> {title} </NavLink>
        </div>
    );
};
