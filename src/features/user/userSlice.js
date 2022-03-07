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

export const getUser = createAsyncThunk(
    'user/getUser',
    async (id, { rejectWithValue }) => {
        try {
            const response = await axios.get(`/users/${id}`)
            console.log(response)
            return response.data
        } catch (err) {
            console.log(err.response.data.message)
            return rejectWithValue(err.response.data.message)
        }
    }
)

export const updateUserPassword = createAsyncThunk(
    'user/updateUserPassword',
    async ({ userId, formData }, { rejectWithValue }) => {
        try {
            console.log(formData)
            const response = await axios.patch(
                `users/${userId}/change_password`,
                formData
            )
            console.log(response)
            return response // change user successfully || response.message => 'old password is incorrect'
        } catch (err) {
            console.log(err.response.data)
            return rejectWithValue(err.response.data)
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
            .addCase(getUser.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(getUser.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(getUser.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
            .addCase(updateUserPassword.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateUserPassword.fulfilled, (state) => {
                state.status = 'succeeded'
            })
            .addCase(updateUserPassword.rejected, (state, action) => {
                state.status = 'failed'
                state.error = action.payload
            })
    },
})

export default userSlice.reducer
