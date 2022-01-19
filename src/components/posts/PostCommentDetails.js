import React from 'react';

export const PostCommentDetails = ({ comment: { body, email, name } }) => {
    return (
        <div>
            <h5>{body}</h5>
            <p>{name} - {email}</p>
        </div>
    );
};

