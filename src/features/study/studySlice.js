import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from '../../axios/axiosInstanceFunction'

const initialState = {
    currentCardIdx: 0,
}

export const studySlice = createSlice({
    name: 'study',
    initialState,
    reducers: {
        setCurrentCardIdx: (state, action) => {
            state.currentCardIdx = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setCurrentCardIdx } = studySlice.actions

export default studySlice.reducer
