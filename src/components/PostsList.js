import React from 'react';

function PostsList({ title, body }) {

    return (
        <div>
            <h5>{title}</h5>
            <p>{body}</p>
        </div>
    );
}

export default PostsList;
