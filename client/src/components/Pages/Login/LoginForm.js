import React from 'react'
import classes from './Login.module.css'

const LoginForm = () => {
    return (
        <form className={classes.form}>
            <input className={classes.formInput} type="text" name="email" id="email" placeholder="Email Address"/>
            <input className={classes.formInput} type="password" name="password" id="password" placeholder="Password" />
            <button>Login</button>
        </form>
    )
}

export default LoginForm
