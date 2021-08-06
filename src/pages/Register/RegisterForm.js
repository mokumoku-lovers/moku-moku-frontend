import React, { useState } from 'react'
import Button from '../../components/UI/FormButton/FormButton'
import Input from '../../components/UI/Input/Input'
import classes from './Register.module.css'

const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
    }

    const passwordConfirmChangeHandler = (e) => {
        setPasswordConfirm(e.target.value)
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
    }

    return (
        <form className={classes.form}>
            <Input
                id="username"
                name="username"
                value={username}
                onChange={usernameChangeHandler}
                placeholder={'Username'}
                type="text"
                fontclassname="far fa-user"
            />
            <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={emailChangeHandler}
                placeholder={'Email Address'}
                fontclassname="fas fa-envelope"
            />
            <Input
                id="password"
                name="password"
                value={password}
                onChange={passwordChangeHandler}
                type={'password'}
                placeholder={'Password'}
                fontclassname="fas fa-unlock-alt"
            />
            <Input
                id="passwordConfirm"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={passwordConfirmChangeHandler}
                type={'password'}
                placeholder={'Confirm Password'}
                fontclassname="fas fa-unlock-alt"
            />
            <Button text="Sign Up" />
        </form>
    )
}

export default RegisterForm
