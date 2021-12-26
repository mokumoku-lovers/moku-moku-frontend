import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import AddCardPage from './pages/AddCardPage/AddCardPage'
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
import ProfileEditingPage from './pages/ProfileEditingPage/ProfileEditingPage'
import RankingPage from './pages/RankingPage/RankingPage'
import Register from './pages/Register/Register'
import UserProfile from './pages/UserProfile/UserProfile'
import Study from './pages/Study/Study'
import EditCardPage from './pages/EditCardPage/EditCardPage'
import CreateDeckPage from './pages/EditCardPage/CreateDeckPage'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register">
                    <Register />
                </Route>
                <Route path="/ranking">
                    <RankingPage />
                </Route>
                <Route path="/profile">
                    <UserProfile />
                </Route>
                <Route path="/study">
                    <Study />
                </Route>
                <Route path="/edit-profile">
                    <ProfileEditingPage />
                </Route>
                <Route path="/add-card">
                    <AddCardPage />
                </Route>
                <Route path="/create-deck">
                    <CreateDeckPage />
                </Route>
                <Route path="/edit-card">
                    <EditCardPage />
                </Route>
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
