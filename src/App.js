import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import './App.css'
import {Homepage} from './pages/Homepage/Homepage'
import Login from './pages/Login/Login'
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
                <Route path="/" component={Homepage}/>
            </Switch>
        </Router>
    )
}

export default App
