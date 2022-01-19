import {Route, Routes, Navigate} from "react-router-dom";

import {Layout} from "./components/Layout";
import {UsersPage, PostsPages} from "./pages";
import {UserAlbums, UserDetails, UserPosts} from "./components/users"
import {PostDetails, PostComments} from "./components/posts"
import {AlbumsDetails} from "./components/albums/AlbumsDetails";


function App() {
    return (
        <Routes>

            <Route path={"/"} element={<Layout/>}>
                <Route path={''} element={<Navigate to={'users'}/>}/>

                <Route path={"users"} element={<UsersPage/>}>
                    <Route path={":id/albums"} element={<UserAlbums/>}>
                        <Route path={":albumId/photos"} element={<AlbumsDetails/>}/>
                    </Route>
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
