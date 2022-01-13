import {useState} from "react";

import {postsService} from "./services/posts.service";
import Users from "./components/users/Users";
import PostsList from "./components/PostsList";
import './App.css';


function App() {
    const [posts, setPosts] = useState([]);

    const getUserPosts = (userId) => {
        postsService.getByUser(userId)
            .then(response => setPosts(response))
    }

    return (
        <div>
            <Users getUserPosts={getUserPosts}/>
            {posts && posts.map(post => <PostsList title={post.title} body={post.body}/>)}
        </div>
    );
}

export default App;
