import React, { useState } from 'react'
import Button from '../../components/UI/FormButton/FormButton'
import Input from '../../components/UI/Input/Input'
import classes from './Login.module.css'
import { login } from '../../features/auth/authSlice'
import { useDispatch, useSelector } from 'react-redux'

const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/

const LoginForm = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [emailIsTouch, setEmailIsTouch] = useState(false)
    const [passwordIsTouch, setPasswordIsTouch] = useState(false)

    const { isLoading } = useSelector((state) => state.auth)
    const dispatch = useDispatch()

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
            dispatch(
                login({
                    email,
                    password,
                })
            )

            // setEmail('')
            // setPassword('')
            // setEmailIsTouch(false)
            // setPasswordIsTouch(false)
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
                isinvalid={emailIsTouchAndInvalid ? 1 : 0}
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
                isinvalid={passwordIsTouchAndInvalid ? 1 : 0}
                autoComplete="off"
                required
            />
            <Button text="Login" valid={overallFormIsValid && !isLoading} />
            <p className={classes.forgetPassword}>Forget Password</p>
        </form>
    )
}

export default LoginForm
