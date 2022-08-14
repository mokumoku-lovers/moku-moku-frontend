import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../axios/axiosInstanceFunction'

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
            const response = await axios('http://168.138.215.26:9000/').post('/users', formData)
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
            const response = await axios('http://168.138.215.26:9000/').get(`/users/${id}`)
            console.log(response)
            return response.data
        } catch (err) {
            console.log(err.response.data.message)
            return rejectWithValue(err.response.data.message)
        }
    }
)

export const updateUserProfile = createAsyncThunk(
    'users/updateUserProfile',
    async ({ userId, formData }, { rejectWithValue }) => {
        try {
            const response = await axios('http://168.138.215.26:9000/').patch(`/users/${userId}`, formData)
            return response.data
        } catch (err) {
            if (err.response) {
                console.log(err.response.data.message)
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)

export const updateUserPassword = createAsyncThunk(
    'user/updateUserPassword',
    async ({ userId, formData }, { rejectWithValue }) => {
        try {
            console.log(formData)
            const response = await axios('http://168.138.215.26:9000/').patch(
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
    reducers: {
        logout: () => initialState,
    },
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
            .addCase(updateUserProfile.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(updateUserProfile.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
            .addCase(updateUserProfile.rejected, (state, action) => {
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

export const { logout } = userSlice.actions

export default userSlice.reducer
