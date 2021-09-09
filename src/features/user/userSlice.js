import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../axios/axiosInstance';

const initialState = {
    user: null,
    isLogin: false,
    isLoading: false,
}

export const createUser = createAsyncThunk(
    'user/createUser',
    async (formData) => {
        console.log(formData)
        try
        {
            const response = await axios.post('/users', formData)
            console.log(response)
        } catch(err) {
            console.log('There is a error' , err)
        }
    }
)

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(createUser.pending, (state, action) =>
        {
            state.isLoading = false
        })
    }
})


export default userSlice.reducer