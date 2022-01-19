import React, {useEffect, useState} from 'react';
import {Outlet} from "react-router-dom";

import {postsService} from "../services/posts.service";
import {PostsList} from "../components/posts/PostsList";
import css from "../App.module.css";


export const PostsPages = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        postsService.getAll().then(response => setPosts(response));
    }, [])

    return (
        <div className={css.container}>
            <div className={css.item}>
                {posts.map(post => <PostsList key={post.id} post={post}/>)}
            </div>
            <div className={css.item}>
                <Outlet/>
            </div>
        </div>
    );
};

