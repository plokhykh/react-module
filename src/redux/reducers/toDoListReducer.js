import {ADD_TASK, CHANGE_STATE_TASK, REMOVE_TASK, UPDATE_TASK} from "../actions/action-types";

const defaultValue = {
    toDoList: [],
    countAllTask: 0,
    countCompletedTask: 0
}

export function toDoListReducer(state = defaultValue, action) {
    switch (action.type) {

        case ADD_TASK: {
            return {
                ...state,
                toDoList: [...state.toDoList, action.payload],
                countAllTask: state.countAllTask + 1
            }
        }

        case REMOVE_TASK: {
            const copyList = [...state.toDoList];
            const index = copyList.findIndex(item => item.id === action.payload)
            copyList.splice(index, 1);

            const completedTask = copyList.filter(item => item.isCompleted === true);
            return {
                ...state,
                toDoList: copyList,
                countAllTask: state.countAllTask - 1,
                countCompletedTask: completedTask.length
            }
        }

        case CHANGE_STATE_TASK: {
            const copyList = [...state.toDoList];
            const todo = copyList.find(item => item.id === action.payload)
            todo.isCompleted =  !todo.isCompleted;

            const completedTask = copyList.filter(item => item.isCompleted === true);
            return {
                ...state,
                toDoList: copyList,
                countCompletedTask: completedTask.length
            }
        }

        default:
            return state
    }
}
