import React, { useState } from 'react'
import Button from '../../components/UI/FormButton/FormButton'
import Input from '../../components/UI/Input/Input'
import classes from './Login.module.css'

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onEmailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    const onPasswordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const onSubmitFormHandler = (e) => {
        e.preventDefault()
        alert('Login')
    }

    return (
        <form className={classes.form} onSubmit={onSubmitFormHandler}>
            <Input
                id="email"
                name="email"
                type="email"
                value={email}
                placeholder={'Email Address'}
                fontclassname="fas fa-envelope"
                onChange={onEmailChangeHandler}
                required
            />
            <Input
                id="password"
                name="password"
                type={'password'}
                placeholder={'Password'}
                value={password}
                fontclassname="fas fa-unlock-alt"
                onChange={onPasswordChangeHandler}
                required
            />
            <Button text="Login" />
            <p className={classes.forgetPassword}>Forget Password</p>
        </form>
    )
}

export default LoginForm
