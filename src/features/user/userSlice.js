import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { checkToken } from '../../app/checkToken'
import axios from '../../axios/axiosInstanceFunction'

const initialState = {
    user: null,
    status: 'idel',
    error: null,
}

export const createUser = createAsyncThunk('user/createUser', async (formData, { rejectWithValue }) => {
    console.log(formData)
    try {
        const response = await axios('https://mokumoku.zsh.jp:9000/').post('/users', formData)

        return response.data
    } catch (err) {
        if (err.response) {
            console.log(err.response.data.message)
            return rejectWithValue(err.response.data.message)
        }
    }
})

export const getUser = createAsyncThunk('user/getUser', async (id, { rejectWithValue }) => {
    try {
        const response = await axios('https://mokumoku.zsh.jp:9000/').get(`/users/${id}`)
        return response.data
    } catch (err) {
        checkToken(err.response.data)
        console.log(err.response.data.message)
        return rejectWithValue(err.response.data.message)
    }
})

export const updateUserProfile = createAsyncThunk(
    'users/updateUserProfile',
    async ({ userId, formData }, { rejectWithValue }) => {
        try {
            const response = await axios('https://mokumoku.zsh.jp:9000/').patch(`/users/${userId}`, formData)
            return response.data
        } catch (err) {
            if (err.response) {
                checkToken(err.response.data)
                console.log(err.response.data.message)
                return rejectWithValue(err.response.data.message)
            }
        }
    }
)
// redeploy
export const updateUserPassword = createAsyncThunk(
    'user/updateUserPassword',
    async ({ userId, formData }, { rejectWithValue }) => {
        try {
            const response = await axios('https://mokumoku.zsh.jp:9000/').patch(
                `users/${userId}/change_password`,
                formData
            )
            return response // change user successfully || response.message => 'old password is incorrect'
        } catch (err) {
            checkToken(err.response.data)
            console.log(err.response.data)
            return rejectWithValue(err.response.data)
        }
    }
)

export const updateUserPoint = createAsyncThunk(
    'user/updateUserPoint',
    async ({ userId, points }, { rejectWithValue }) => {
        try {
            const response = await axios('https://mokumoku.zsh.jp:9000/').patch(`/users/${userId}`, { points })
            return response.data
        } catch (err) {
            console.dir(err)
            return rejectWithValue(err.response.data)
        }
    }
)

export const uploadProfileImage = createAsyncThunk(
    'users/uploadUserProfilePic',
    async ({ id, formData }, { rejectWithValue }) => {
        try {
            const response = await axios('https://mokumoku.zsh.jp:9000/').post(
                `/users/${id}/upload_profile_pic`,
                formData
            )
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data.message)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
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
            .addCase(updateUserPoint.fulfilled, (state, action) => {
                state.status = 'succeeded'
                state.user = action.payload
            })
    },
})

export default userSlice.reducer
