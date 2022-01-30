import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";

import {getAllPosts} from "../store/postSlice";
import {PostDetails} from "../components/PostDetails";


export const PostsPage = () => {
    const { posts, status, error } = useSelector(state => state['postsReducer']);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getAllPosts())
    }, [])

    return (
        <div>
                {status === 'loading' && <h3>LOADING...</h3>}
                {error && <h3>{error}</h3>}
                {!!posts.length && posts.map(post => <PostDetails key={post.id} post={post}/>)}
        </div>
    );
};

