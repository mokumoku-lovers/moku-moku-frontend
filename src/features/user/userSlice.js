import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/axiosInstance'

const initialState = {
    user: null,
    isLogin: false,
    isLoading: false,
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
            .addCase(createUser.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(createUser.fulfilled, (state, action) => {
                state.isLoading = false
                state.isLogin = true
                state.user = action.payload
                state.error = null
            })
            .addCase(createUser.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
                state.user = null
                state.isLogin = false
            })
    },
})

export default userSlice.reducer
