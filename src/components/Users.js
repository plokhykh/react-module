import React, {useState, useEffect} from 'react';
import User from "./User";


function Users() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(response => setUsers(response))
            .catch(err => console.log(err))
    }, [])

    return (
        <div>
            {users.map(user =>
                <User
                    key={user.id}
                    name={user.name}
                    username={user.username}
                    email={user.email}
                />)}
        </div>
    );
}

export default Users;
