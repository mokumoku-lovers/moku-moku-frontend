import React from 'react'
import { NavLink } from 'react-router-dom'
import classes from './NavBar.module.css'
import logo from '../../logo.svg'
import GuestNav from './GuestNav'
import AuthNav from './AuthNav'
import { useSelector } from 'react-redux'

const NavBar = () => {
    const { loginData } = useSelector((store) => store.auth)

    return (
        <nav className={classes.navbar}>
            <NavLink exact to="/">
                <img
                    className={classes['nav-logo']}
                    src={logo}
                    alt="MokuMoku"
                />
            </NavLink>
            {loginData ? <AuthNav /> : <GuestNav />}
        </nav>
    )
}

export default NavBar
