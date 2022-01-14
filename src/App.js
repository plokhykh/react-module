import {useState} from "react";

import {postsService} from "./services/posts.service";
import Users from "./components/users/Users";
import Posts from "./components/Posts";
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
            <Posts posts={posts}/>
        </div>
    );
}

export default App;
