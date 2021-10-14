import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css'

const GuestNav = () => {
    return (
        <ul className={classes['nav-menu']}>
            <NavLink
                exact
                to="/login"
                activeClassName="active"
                className={classes['nav-links']}>
                Sign In
            </NavLink>

            <NavLink
                exact
                to="/register"
                activeClassName="active"
                className={classes['nav-links']}>
                Sign Up
            </NavLink>
        </ul>
    )
}

export default GuestNav
