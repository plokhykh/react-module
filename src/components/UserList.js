import React from 'react';

function UserList({ id, name, username, getUserId }) {

    return (
        <div>
            {id}. {name} - {username}
            <button onClick={() => getUserId(id)}>details</button>
        </div>
    );
}

export default UserList;
