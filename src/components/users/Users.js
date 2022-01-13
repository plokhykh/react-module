import React, {useEffect, useState} from 'react';

import {userServices} from '../../services/users.service';
import UserList from "../UserList";
import UserDetails from "../UserDetails";
import './Users.css'

function Users({ getUserPosts }) {
    const [users, setUsers] = useState([]);
    const [user, setUser] = useState(null);

    useEffect(() => {
        userServices.getAll()
            .then(response => setUsers(response))
    }, [])

    const getUserId = (id) => {
        userServices.getById(id)
            .then(response => setUser(response))
    }


    return (
        <div className='box-users'>
            <div>
                {users.map(user => <UserList
                    key={user.id}
                    id={user.id}
                    name={user.name}
                    username={user.username}
                    getUserId={getUserId}
                />)}
            </div>

            <div>
                {user && <UserDetails user={user} getUserPosts={getUserPosts}/>}
            </div>

        </div>
    );
}

export default Users;
