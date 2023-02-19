import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    studyCards: [],
}

export const studySlice = createSlice({
    name: 'study',
    initialState,
    reducers: {
        setStudyCards: (state, action) => {
            state.studyCards = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { setStudyCards } = studySlice.actions

export default studySlice.reducer
