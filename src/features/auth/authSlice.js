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
    async (formData, { rejectWithValue }) => {
        try {
            const response = await axios.post(
                'https://mokumoku.zsh.jp:9001/oauth/login',
                formData
            )
            return response.data
        } catch (err) {
            if (err.response) {
                return rejectWithValue(err.response.data)
            }
        }
    }
)

const authSlice = createSlice({
    name: 'auth',
    initialState,
    extraReducers(builder) {
        builder
            .addCase(login.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false
                state.loginData = action.payload
                state.error = null
                localStorage.setItem('token', action.payload.access_token)
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false
                state.loginData = null
                state.error = action.payload
            })
    },
})

export default authSlice.reducer
