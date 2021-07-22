import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import Login from './pages/Login/Login'

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/login">
                    <Login />
                </Route>
                <Route path="/register"></Route>
                <Route path="/"></Route>
            </Switch>
        </Router>
    )
}

export default App
