import React from 'react';

export const PostDetails = ({ post: { title, body } }) => {
    return (
        <div>
            <h3>{title}</h3>
            <p>{body}</p>

            <hr/>
        </div>
    );
};

