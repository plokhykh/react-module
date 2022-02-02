import {createStore} from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';

import {toDoListReducer} from "./reducers/toDoListReducer";


export const store = createStore(toDoListReducer, composeWithDevTools());
