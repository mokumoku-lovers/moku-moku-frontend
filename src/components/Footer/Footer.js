import React from 'react'
import classes from './Footer.module.css'
import Logo from '../../logo.svg'
import { NavLink } from 'react-router-dom'

const Footer = () => {
    return (
        <footer className={classes.footer}>
            <div className={classes.container}>
                <div className={classes.content}>
                    <img className={classes.logo} src={Logo} alt="logo" />
                    <h1>Ready to get started?</h1>
                    <p>Master any subject, one success at a time</p>
                    <button>Get Started</button>
                </div>
                <ul className={classes.links}>
                    <li>
                        <NavLink to={'/'}>Home</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/register'}>Sign Up</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/login'}>Login</NavLink>
                    </li>
                    <li>
                        <NavLink to={'/ranking'}>Ranking</NavLink>
                    </li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer
