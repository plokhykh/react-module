import React, {useEffect, useState} from 'react';
import {useParams, useLocation, Link, Outlet} from "react-router-dom";

import {usersService} from "../../services/users.service";
import css from "../../App.module.css";


export const UserDetails = () => {

    const { id } = useParams();
    const { state } = useLocation();

    const [user, setUser] = useState(null);

    useEffect(() => {
            if (state) {
                setUser(state);
                return
            }
            usersService.getById(id).then(response => setUser(response))
        }, [id]
    )

    return (
        <div>
            {user && <div>
                <h3>{user.name}</h3>
                <p>username: {user.username}</p>
                <p>email: {user.email}</p>
                <p>phone: {user.phone}</p>
                <p>website: {user.website}</p>
                <p>address: {user.address.suite}, {user.address.street}, {user.address.city}</p>
                <Link to={'posts'}>
                    <button>
                        get posts
                    </button>
                </Link>
            </div>}

            <div className={css.margin}>
                <Outlet/>
            </div>
        </div>
    );
};

