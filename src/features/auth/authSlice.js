import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

// create a slice of auth
const initialState = {
    loginData: null,
    isLoading: false,
    error: null,
}

export const login = createAsyncThunk(
    'auth/login',
    async (_, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'http://168.138.215.26:9001/oauth/login',
                {
                    email: 'testiasdfasfng1@forauth.com',
                    password: 'Hello123!@#',
                }
            )
            console.log(response.data)
            return response.data
        } catch (err) {
            if (err.response) {
                console.log(err.response.data)
                return rejectWithValue(err.response.data)
            }
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},

    extraReducers(builder) {
        builder
            .addCase(login.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.loginData = action.payload
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    },
})

export default authSlice.reducer
