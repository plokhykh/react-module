import React from 'react';

function Comment({ name, email, body }) {

    return (
        <div>
            <h4>{name} - {email}</h4>
            <p>{body}</p>
        </div>
    );
}

export default Comment;
