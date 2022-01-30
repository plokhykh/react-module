import {configureStore} from "@reduxjs/toolkit";

import carsReducer from "./carSlice";
import usersReducer from "./userSlice";
import postsReducer from './postSlice';
import commentsReducer from './commentSlice';


const store = configureStore({
    reducer: {
        carsReducer,
        usersReducer,
        postsReducer,
        commentsReducer
    }
})

export default store;
