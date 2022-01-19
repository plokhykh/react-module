import React from 'react';

export const UserPostDetails = ({ post: { title, body } }) => {

    return (
        <div>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
};

