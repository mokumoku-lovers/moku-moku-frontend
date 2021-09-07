import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
    user: null,
    isLogin: false,
    isLoading: false,
}

export const createUser = createAsyncThunk(
    'user/createUser',
    async (formData) => {
        console.log(formData)
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