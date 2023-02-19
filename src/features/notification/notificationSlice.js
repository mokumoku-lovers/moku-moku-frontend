import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    notiList: [],
}

export const notificationSlice = createSlice({
    name: 'deck',
    initialState,
    reducers: {
        createNoti: (state, action) => {
            state.notiList.push({ ...action.payload })
        },
        removeNoti: (state, action) => {
            state.notiList = state.notiList.filter((n) => n.id !== action.payload)
        },
    },
})

export const { createNoti, removeNoti } = notificationSlice.actions

export default notificationSlice.reducer
