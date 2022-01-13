import React from 'react';

function UserDetails({ user, getUserPosts }) {
    const { id, name, username, email, phone, address } = user;

    return (
        <div>
            <h3>{name}</h3>
            <p>username: {username}</p>
            <p>email: {email}</p>
            <p>phone: {phone}</p>
            <p>address: {address.suite}, {address.street}, {address.city}</p>
            <button onClick={()=> getUserPosts(id)}>posts from user</button>
        </div>
    );
}

export default UserDetails;
