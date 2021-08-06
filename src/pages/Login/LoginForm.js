import React, { useState } from 'react'
import Button from '../../components/UI/FormButton/FormButton'
import Input from '../../components/UI/Input/Input'
import classes from './Login.module.css'

const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailIsTouch, setEmailIsTouch] = useState(false)
    const [passwordIsTouch, setPasswordIsTouch] = useState(false)

    const emailIsValid =
        email.trim().length > 0 && emailRegex.test(String(email).toLowerCase())

    const emailIsTouchAndInvalid = emailIsTouch && !emailIsValid

    const passwordIsValid = password.trim().length > 0
    const passwordIsTouchAndInvalid = passwordIsTouch && !passwordIsValid

    const overallFormIsValid = emailIsValid && passwordIsValid

    const onEmailChangeHandler = (e) => {
        setEmail(e.target.value)
        setEmailIsTouch(true)
    }

    const onPasswordChangeHandler = (e) => {
        setPassword(e.target.value)
        setPasswordIsTouch(true)
    }

    const onSubmitFormHandler = (e) => {
        if (overallFormIsValid) {
            e.preventDefault()
            alert('Login successful')

            setEmail('')
            setPassword('')
            setEmailIsTouch(false)
            setPasswordIsTouch(false)
        } else {
            return
        }
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
                isInvalid={emailIsTouchAndInvalid}
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
                isInvalid={passwordIsTouchAndInvalid}
                required
            />
            <Button text="Login" valid={overallFormIsValid} />
            <p className={classes.forgetPassword}>Forget Password</p>
        </form>
    )
}

export default LoginForm
