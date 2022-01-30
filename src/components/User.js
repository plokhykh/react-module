import React from 'react';

const User = ({ user: { name, username, email } }) => {
    return (
        <div>
            {username}: {name} - {email}
            <hr/>
        </div>
    );
};

export default User;
