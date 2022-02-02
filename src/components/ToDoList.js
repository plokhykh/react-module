import React from 'react';
import {connect} from 'react-redux';

import {removeTask, changeStateTask} from "../redux/actions/toDoListAction";
import './ToDoList.css';


const ToDoList = (props) => {
    const { toDoList, removeTask, changeStateTask } = props;

    const handleOnChange = (id) => {
        changeStateTask(id)
    };

    return (
        <div>
            {!!toDoList.length && toDoList.map(item =>
                <div key={item.id} className={`${item.isCompleted ? 'done' : 'in-progress'}`}>

                    <input type="checkbox"
                           value={item.isCompleted}
                           onChange={() => handleOnChange(item.id)}
                    />

                    {item.body}

                    <button onClick={() => removeTask(item.id)}>
                        delete
                    </button>

                </div>
            )}
        </div>
    );
};


const mapStateToProps = (store) => {
    return {
        toDoList: store.toDoList
    }
}

const mapDispatchToProps = ({
    removeTask,
    changeStateTask
})

export default connect(mapStateToProps, mapDispatchToProps)(ToDoList);
