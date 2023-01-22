import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import deckReducer from '../features/deckTitle/deckSlice'
import studyReducer from '../features/study/studySlice'
import notiReducer from '../features/notification/notificationSlice'
import { combineReducers } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'

const appReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    deck: deckReducer,
    study: studyReducer,
    noti: notiReducer,
})

export const rootReducer = (state, action) => {
    if (action.type === 'logout') {
        storage.removeItem('persist:root')
        localStorage.clear()
        return appReducers(undefined, action)
    }
    return appReducers(state, action)
}
