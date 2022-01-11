import React, {useEffect, useState} from 'react';
import Post from "./Post";

function Posts() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(data => data.json())
            .then(response => setPosts(response))
            .catch(err => console.log(err))
    }, [])
    return (
        <div>
            {posts.map(post => <Post key={post.id} body={post.body} title={post.title}/>)}
        </div>
    );
}

export default Posts;
