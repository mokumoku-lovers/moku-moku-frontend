import { createSlice } from '@reduxjs/toolkit'

// create a slice of auth
const initialState = {}
const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {},
})

export default authSlice.reducer
