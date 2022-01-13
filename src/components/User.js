import React from 'react';

function User({ id, name, username, email }) {
    return (
        <div>
            {id}. {name} - {username} - {email}
        </div>
    );
}

export default User;
