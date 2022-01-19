import React from 'react';

export const PostCommentDetails = ({ comment: { body, email, name } }) => {
    return (
        <div>
            <h5>{name}</h5>
            <p> {body} </p>
            <p>{email}</p>
            <hr/>
        </div>
    );
};

