import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css'
import logo from '../../logo.svg'
import GuestNav from './GuestNav'
import AuthNav from './AuthNav'

// Mock islogin data
// later will be replaced by data from server

const NavBar = ({ isLoggedIn = true }) => {
    return (
        <nav className={classes.navbar}>
            <NavLink exact to="/">
                <img
                    className={classes['nav-logo']}
                    src={logo}
                    alt="MokuMoku"
                />
            </NavLink>
            {isLoggedIn ? <AuthNav /> : <GuestNav />}
        </nav>
    )
}

export default NavBar
