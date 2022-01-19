import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";

import {usersService} from "../../services/users.service";
import {UserPostDetails} from "./UserPostDetails";


export const UserPosts = () => {

    const { id } = useParams();
    const [userPosts, setUserPosts] = useState([]);

    useEffect(() => {
        usersService.getUserPosts(id).then(response => setUserPosts(response))
    }, [])

    return (
        <div>
            {!!userPosts.length && userPosts.map (post => <UserPostDetails key={post.id} post={post}/>)}
        </div>
    );
};

