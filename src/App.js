import './App.css';
import CarsPage from "./pages/CarsPage";
import {Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import {UsersPage} from "./pages/UsersPage";
import {PostsPage} from "./pages/PostsPage";
import {CommentsPage} from "./pages/CommentsPage";

function App() {
    return (

        <Routes>
            <Route path={'/'} element={<Layout/>}>
                <Route path={'cars'} element={<CarsPage/>}/>
                <Route path={'users'} element={<UsersPage/>}/>
                <Route path={'posts'} element={<PostsPage/>}/>
                <Route path={'comments'} element={<CommentsPage/>}/>
            </Route>

        </Routes>

    );
}

export default App;
