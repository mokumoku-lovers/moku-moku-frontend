import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    title: '',
}

export const deckSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        onSaveTitle: (state, action) => {
            state.title = action.payload
        },
    },
})

// Action creators are generated for each case reducer function
export const { onSaveTitle } = deckSlice.actions

export default deckSlice.reducer
