import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {commentsService} from "../services/comments.service";

export const getAllComments = createAsyncThunk(
    'comments/getAllComments',
    async (_, { rejectedWithValue }) => {
        try {
            const comments = await commentsService.getAll();
            return comments
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const commentSlice = createSlice({
    name: 'comments',
    initialState: {
        comments: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllComments.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllComments.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.comments = action.payload
        },
        [getAllComments.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const commentsReducer = commentSlice.reducer;

export default commentsReducer;
