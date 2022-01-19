import React from 'react';
import {NavLink} from "react-router-dom";

export const PostsList = ({post}) => {
    const {id, title} = post
    return (
        <div>
            <NavLink to={id.toString()} state={post}>
                {id}. {title}
            </NavLink>
        </div>
    );
};

