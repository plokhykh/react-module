import React from 'react';
import {useDispatch, useSelector} from 'react-redux';

import {removeTask, changeStateTask} from "../redux/actions/toDoListAction";
import './ToDoList.css';


export const ToDoList = () => {

    const {toDoList} = useSelector(store => store);
    const dispatch = useDispatch();

    const handleOnChange = (id) => {
        dispatch(changeStateTask(id))
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

                    <button onClick={() => dispatch(removeTask(item.id))}>
                        delete
                    </button>

                </div>
            )}
        </div>
    );
};


