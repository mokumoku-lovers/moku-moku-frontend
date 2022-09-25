import authReducer from '../features/auth/authSlice'
import userReducer from '../features/user/userSlice'
import deckReducer from '../features/deckTitle/deckSlice'
import { combineReducers, createAction } from '@reduxjs/toolkit'
import storage from 'redux-persist/lib/storage'


const appReducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    deck: deckReducer,
})

export const rootLogout = createAction('root/logout')

export const rootReducer = (state, action) =>{
    if (action.type === rootLogout){
        storage.removeItem('persist:root')
        localStorage.clear()
        return appReducers(undefined, action)
    }
    return appReducers(state, action)
}