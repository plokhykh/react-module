import React from 'react';

function User({name, username, email}) {

    return (
        <div>
            <h3>{username}</h3>
            <p>name: {name} - email: {email}</p>
        </div>
    );
}

export default User;
