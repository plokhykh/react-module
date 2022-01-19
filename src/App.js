import {Route, Routes, Navigate} from "react-router-dom";

import {Layout} from "./components/Layout";
import {UsersPage, PostsPages} from "./pages";
import {UserDetails} from "./components/users/UserDetails";
import {UserPosts} from "./components/users/UserPosts";
import {PostDetails} from "./components/posts/PostDetails";
import {PostComments} from "./components/posts/PostComments";

function App() {
    return (
        <Routes>

            <Route path={"/"} element={<Layout/>}>
                <Route path={''} element={<Navigate to={'users'}/>}/>

                <Route path={"users"} element={<UsersPage/>}>
                    <Route path={":id"} element={<UserDetails/>}>
                        <Route path={"posts"} element={<UserPosts/>}/>
                    </Route>
                </Route>

                <Route path={"posts"} element={<PostsPages/>}>
                    <Route path={":id"} element={<PostDetails/>}>
                        <Route path={"comments"} element={<PostComments/>}/>
                    </Route>
                </Route>
            </Route>

        </Routes>
    );
}

export default App;
