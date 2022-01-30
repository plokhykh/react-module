import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import User from "../components/User";
import {getAllUsers} from "../store/userSlice";


export const UsersPage = () => {
    const { users, error, status } = useSelector(state => state['usersReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllUsers());
    }, [])

    return (
        <div>
            {status === 'loading' && <h3>LOADING...</h3>}
            {error && <h3>{error}</h3>}
            {!!users.length && users.map(user => <User key={user.id} user={user}/>)}
        </div>
    );
};

