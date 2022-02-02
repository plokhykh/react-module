import {useState} from "react";
import {connect} from 'react-redux';
import uniqid from 'uniqid';

import ToDoList from "./components/ToDoList";
import {addTask} from "./redux/actions/toDoListAction"
import './App.css';


function App(props) {
    const { countAllTask, countCompletedTask, addTask } = props;

    const [inputData, setInputData] = useState("");

    const onSaveClick = () => {

        const toDo = {
            id: uniqid(),
            body: inputData,
            isCompleted: false
        }

        addTask(toDo)
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


const mapStateToProps = (store) => {
    return {
        countAllTask: store.countAllTask,
        countCompletedTask: store.countCompletedTask
    };
};

const mapDispatchToProps = ({
    addTask
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
