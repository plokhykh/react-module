import React from 'react';

import PostsList from "./PostsList";

function Posts({ posts }) {

    return (
        <div>
            {posts && posts.map(post => <PostsList title={post.title} body={post.body}/>)}
        </div>

);}

export default Posts;
