import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/axiosInstance'

const initialState = {
    user: null,
    status: 'idel',
    error: null,
}

export const createUser = createAsyncThunk(
    'user/createUser',
    async (formData, { rejectWithValue }) => {
        console.log(formData)
        try {
            const response = await axios.post('/users', formData)
            console.log(response)
            return response.data
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.message)
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(createUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(createUser.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(createUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export default userSlice.reducer
