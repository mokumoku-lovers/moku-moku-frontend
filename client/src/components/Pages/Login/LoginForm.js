import React from 'react'
import Button from '../../UI/FormButton/Button'
import Input from '../../UI/Input/Input'
import classes from './Login.module.css'

const LoginForm = () => {
    return (
        <form className={classes.form}>
            <Input placeholder={'Email Address'} />
            <Input placeholder={'Password'} />
            <Button text="Login" />
            <p>Forget Password</p>
        </form>
    )
}

export default LoginForm
