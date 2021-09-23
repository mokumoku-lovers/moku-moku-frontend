import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Homepage from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
import RankingPage from './pages/RankingPage/RankingPage'
import Register from './pages/Register/Register'

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
                <Route path="/">
                    <Homepage />
                </Route>
            </Switch>
        </Router>
    )
}

export default App
