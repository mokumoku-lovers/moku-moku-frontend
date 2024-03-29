import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute'
import './App.css'
import AddCardPage from './pages/AddCardPage/AddCardPage'
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
import ProfileEditingPage from './pages/ProfileEditingPage/ProfileEditingPage'
import RankingPage from './pages/RankingPage/RankingPage'
import Register from './pages/Register/Register'
import UserProfile from './pages/UserProfile/UserProfile'
import Study from './pages/Study/Study'
import DeckDetail from './pages/DeckDetail/DeckDetail'
import CreateDeckPage from './pages/DeckDetail/CreateDeckPage'
import Notification from './components/UI/Notification/Notification'

function App() {
    return (
        <Router>
            <Notification />
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <ProtectedRoute path="/ranking">
                    <RankingPage />
                </ProtectedRoute>
                <ProtectedRoute path="/profile">
                    <UserProfile />
                </ProtectedRoute>
                <ProtectedRoute path="/study/:deckId">
                    <Study />
                </ProtectedRoute>
                <ProtectedRoute path="/edit-profile">
                    <ProfileEditingPage />
                </ProtectedRoute>
                <ProtectedRoute path="/deck/:deckId/add-card">
                    <AddCardPage />
                </ProtectedRoute>
                <ProtectedRoute path="/card/:cardId">
                    <AddCardPage />
                </ProtectedRoute>
                <ProtectedRoute path="/create-deck">
                    <CreateDeckPage />
                </ProtectedRoute>
                <ProtectedRoute path="/deck/:deckId">
                    <DeckDetail />
                </ProtectedRoute>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
