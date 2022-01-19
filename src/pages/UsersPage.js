import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {usersService} from "../services/users.service";
import {UsersList} from "../components/users/UsersList";
import css from "../App.module.css";


export const UsersPage = () => {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        usersService.getAll().then(response => setUsers(response))
    }, [])

    return (
        <div className={css.container}>
            <div className={css.item}>
                {users.map(user => <UsersList key={user.id} user={user}/>)}
            </div>

            <div className={css.item}>
                <Outlet/>
            </div>
        </div>
    );
};

