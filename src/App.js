import {useState} from "react";
import {useDispatch, useSelector} from 'react-redux';
import uniqid from 'uniqid';

import {ToDoList} from "./components/ToDoList";
import {addTask} from "./redux/actions/toDoListAction"
import './App.css';


function App() {
    const [inputData, setInputData] = useState("");

    const {countAllTask, countCompletedTask} = useSelector(store=> store);
    const dispatch = useDispatch();

    const onSaveClick = () => {
        const toDo = {
            id: uniqid(),
            body: inputData,
            isCompleted: false
        }

        dispatch(addTask(toDo))
        setInputData("");
    }

    return (
        <div>
            <div>
                <p>All Tasks: {countAllTask}</p>
                <p>Completed Task: {countCompletedTask}</p>
                <input type="text"
                       value={inputData}
                       onChange={(e) => {
                           setInputData(e.target.value)
                       }}
                />
                <button onClick={onSaveClick}>save</button>
            </div>
            <ToDoList/>
        </div>
    );
}



export default App;
