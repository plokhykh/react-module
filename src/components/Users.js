import React, {useEffect, useState} from 'react';

import User from "./User";

function Users() {

    const [users, setUsers] = useState([]);
    const [filterForm, setFilterForm] = useState(
        {
            name: "",
            username: "",
            email: ""
        })

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(data => data.json())
            .then(response => setUsers(response))
    }, [])


    const onFormChange = (e) => {
        setFilterForm({ ...filterForm, [e.target.name]: e.target.value })
    }

    const onFormSubmit = (e) => {
        e.preventDefault();

        let filteredUsers = users;

        if (filterForm.name !== "") {
            filteredUsers = filteredUsers.filter(user => user.name.toLowerCase().includes(filterForm.name));
        }
        if (filterForm.username !== "") {
            filteredUsers = filteredUsers.filter(user => user.username.toLowerCase().includes(filterForm.username));
        }
        if (filterForm.email !== "") {
            filteredUsers = filteredUsers.filter(user => user.email.toLowerCase().includes(filterForm.email));
        }

        setUsers(filteredUsers);
    }


    return (
        <div>
            <form onSubmit={onFormSubmit}>
                <label> Name:
                    <input type="text" name="name" value={filterForm.name} onChange={onFormChange}/>
                </label>
                <label> Username:
                    <input type="text" name="username" value={filterForm.username} onChange={onFormChange}/>
                </label>
                <label> Email:
                    <input type="text" name="email" value={filterForm.email} onChange={onFormChange}/>
                </label>
                <button>Find</button>
            </form>

            {users.map(item => <User
                key={item.id}
                id={item.id}
                name={item.name}
                username={item.username}
                email={item.email}
            />)}
        </div>
    );
}

export default Users;
