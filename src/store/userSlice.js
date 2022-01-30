import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import {usersService} from '../services/users.service'

export const getAllUsers = createAsyncThunk(
    'users/getAllUsers',
    async (_, { rejectedWithValue }) => {
        try {
            const users = await usersService.getAll();
            return users
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

const userSlice = createSlice({
    name: 'users',
    initialState: {
        users: [],
        status: null,
        error: null
    },
    extraReducers: {
        [getAllUsers.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllUsers.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.users = action.payload
        },
        [getAllUsers.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const usersReducer = userSlice.reducer;

export default usersReducer;
