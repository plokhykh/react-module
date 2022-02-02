import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import {carsService} from "../services/cars.service";


export const getAllCars = createAsyncThunk(
    'cars/getAllCars',
    async (_, { rejectedWithValue }) => {
        try {
            const cars = await carsService.getAll();
            return cars
        } catch (e) {
            return rejectedWithValue(e.message)
        }
    }
)

export const updateCarById = createAsyncThunk(
    'cars/updateCar',
    async ({ data }, { dispatch }) => {
        try {
            await carsService.updateById(data.id, data);
            dispatch(updateCar({ data }))
        } catch (e) {
            console.log(e);
        }
    }
)

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        cars: [],
        status: null,
        error: null,
    },
    reducers: {
        updateCar: (state, action) => {
           const woOneCar = state.cars.filter(car => car.id !== action.payload.data.id)
            state.cars = [...woOneCar, action.payload.data]
        }

    },
    extraReducers: {
        [getAllCars.pending]: (state, action) => {
            state.status = 'loading'
            state.error = null
        },
        [getAllCars.fulfilled]: (state, action) => {
            state.status = 'resolved'
            state.cars = action.payload
        },
        [getAllCars.rejected]: (state, action) => {
            state.status = 'rejected'
            state.error = action.payload
        }

    }
})

const carsReducer = carsSlice.reducer;
const { updateCar } = carsSlice.actions;

export default carsReducer;
export const carsActions = {
    updateCar
};
