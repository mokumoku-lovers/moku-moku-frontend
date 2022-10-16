import { createSlice } from '@reduxjs/toolkit'

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
