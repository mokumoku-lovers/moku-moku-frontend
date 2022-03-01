import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import deckReducer from '../features/deckTitle/deckSlice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    deck: deckReducer,
})
