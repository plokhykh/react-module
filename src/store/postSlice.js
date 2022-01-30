import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {postsService} from "../services/posts.service";


export const getAllPosts = createAsyncThunk(
    'posts/getAllPosts',
    async (_, { rejectedWithValue }) => {
        try {
            const posts = await postsService.getAll();
            return posts
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const postSlice = createSlice({
    name: 'posts',
    initialState: {
        posts: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllPosts.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllPosts.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.posts = action.payload
        },
        [getAllPosts.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const postsReducer = postSlice.reducer;

export default postsReducer;
