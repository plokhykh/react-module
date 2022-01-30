import React from 'react';

export const CommentDetails = ({ comment: { name, email, body } }) => {
    return (
        <div>
            {name}: {body}
            -{email}
            <hr/>
        </div>
    );
};

