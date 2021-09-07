import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLogin: false,
    isLoading: false,
}


const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {

    }
})


export default userSlice.reducer