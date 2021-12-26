import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import deckReducer from '../features/deckTitle/deckSlice'

export const store = configureStore({
    reducer: {
        auth: authReducer,
        user: userReducer,
        deck: deckReducer,
    },
})
