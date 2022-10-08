import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import deckReducer from '../features/deckTitle/deckSlice'
import studyReducer from '../features/study/studySlice'
import { combineReducers } from '@reduxjs/toolkit'

export const rootReducer = combineReducers({
    auth: authReducer,
    user: userReducer,
    deck: deckReducer,
    study: studyReducer,
})
