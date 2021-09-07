import React, { useState } from 'react'
import Button from '../../components/UI/FormButton/FormButton'
import Input from '../../components/UI/Input/Input'
import MessageBox from '../../components/UI/MessageBox/MessageBox'
import classes from './Register.module.css'
import { createUser } from '../../features/user/userSlice'
import { useDispatch } from 'react-redux'
/*
 *	At least one upper case English Letter
 *	At least one lower case English letter
 *	At least one digit
 *	At least one special character
 *	Minimum eight in length
 */

const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/

const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/
const RegisterForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [passwordConfirm, setPasswordConfirm] = useState('')
    const [email, setEmail] = useState('')
    const [showPasswordMessageBox, setShowPasswordMessageBox] = useState(false)

    const [usernameIsTouch, setUsernameIsTouch] = useState(false)
    const [passwordIsTouch, setPasswordIsTouch] = useState(false)
    const [passwordConfirmIsTouch, setPasswordConfirmIsTouch] = useState(false)
    const [emailIsTouch, setEmailIsTouch] = useState(false)

    // check validatiy
    const usernameIsValid = username.trim().length > 0

    const passwordIsValid =
        !password.includes(' ') && strongPasswordRegex.test(password)

    const passwordConfirmIsValid = password === passwordConfirm

    const emailIsValid =
        email.trim().length > 0 && emailRegex.test(String(email).toLowerCase())

    const overallFormIsValid =
        usernameIsValid &&
        passwordIsValid &&
        passwordConfirmIsValid &&
        emailIsValid
    // end check validatiy

    const usernameIsTouchAndInvalid = usernameIsTouch && !usernameIsValid
    const passwordIsTouchAndInvalid = passwordIsTouch && !passwordIsValid
    const passwordConfirmIsTouchAndInvalid =
        passwordConfirmIsTouch && !passwordConfirmIsValid
    const emailIsTouchAndInvalid = emailIsTouch && !emailIsValid

    const usernameChangeHandler = (e) => {
        setUsername(e.target.value)
        setUsernameIsTouch(true)
    }

    const passwordChangeHandler = (e) => {
        setPassword(e.target.value)
        setPasswordIsTouch(true)
    }

    const passwordConfirmChangeHandler = (e) => {
        setPasswordConfirm(e.target.value)
        setPasswordConfirmIsTouch(true)
    }

    const emailChangeHandler = (e) => {
        setEmail(e.target.value)
        setEmailIsTouch(true)
    }

    const dispatch = useDispatch()

    const onSubmitHandler = async (e) =>
    {
        e.preventDefault()

        if (overallFormIsValid)
        {
            await dispatch(createUser({
                email,
                username,
                password,
                password_r: passwordConfirm
            }))
        }
        else
        {
            console.log('Form is not valid.')
        }
    }

    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input
                id="username"
                name="username"
                value={username}
                onChange={usernameChangeHandler}
                placeholder={'Username'}
                type="text"
                fontclassname="far fa-user"
                isinvalid={usernameIsTouchAndInvalid ? 1 : 0}
            />
            <Input
                id="email"
                name="email"
                type="email"
                value={email}
                onChange={emailChangeHandler}
                placeholder={'Email Address'}
                fontclassname="fas fa-envelope"
                isinvalid={emailIsTouchAndInvalid ? 1 : 0}
            />

            <Input
                id="password"
                name="password"
                value={password}
                onChange={passwordChangeHandler}
                type={'password'}
                placeholder={'Password'}
                fontclassname="fas fa-unlock-alt"
                autoComplete="off"
                isinvalid={passwordIsTouchAndInvalid ? 1 : 0}
            />

            <div className={classes.passwordContainer}>
                <p className={classes.strongPasswordText}>
                    <span className={classes.strongPasswordDescription}>
                        <i
                            onClick={() => setShowPasswordMessageBox(true)}
                            className={`far fa-question-circle ${classes.questionIcon}`}
                            style={{ cursor: 'pointer', color: 'blue' }}></i>
                    </span>
                    {'  '}
                    Password need to be strong.
                </p>
                {showPasswordMessageBox && (
                    <MessageBox
                        onClickDismiss={() => setShowPasswordMessageBox(false)}>
                        Must be at least 8 characters contain one lowercase
                        character, one uppercase character, one special
                        character, one number and no space.
                    </MessageBox>
                )}
            </div>

            <Input
                id="passwordConfirm"
                name="passwordConfirm"
                value={passwordConfirm}
                onChange={passwordConfirmChangeHandler}
                type={'password'}
                placeholder={'Confirm Password'}
                fontclassname="fas fa-unlock-alt"
                isinvalid={passwordConfirmIsTouchAndInvalid ? 1 : 0}
                autoComplete="off"
            />
            <Button text="Sign Up" valid={overallFormIsValid} />
        </form>
    )
}

export default RegisterForm
