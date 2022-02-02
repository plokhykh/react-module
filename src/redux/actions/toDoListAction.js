import {ADD_TASK, CHANGE_STATE_TASK, REMOVE_TASK} from "./action-types";

export const addTask = (todo) => {
    return {
        type: ADD_TASK,
        payload: todo
    }
};

export const removeTask = (id) => {
    return {
        type: REMOVE_TASK,
        payload: id
    }
};

export const changeStateTask = (id) => {
    return {
        type: CHANGE_STATE_TASK,
        payload: id
    }
};
