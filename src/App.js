import './App.css';
import Users from "./components/Users";
import Posts from "./components/Posts";
import Comments from "./components/Comments";


function App() {
    return (
        <div className="container">
            <div className="box">
                <span className='users'><Users/></span>
                <span className='posts'><Posts/></span>
            </div>
            <div className="comments">
                <Comments/>
            </div>
        </div>
    );
}

export default App;
