import React from 'react'
import Button from '../../UI/FormButton/Button'
import Input from '../../UI/Input/Input'
import classes from './Register.module.css'

const RegisterForm = () => {
    return (
        <form className={classes.form}>
            <Input placeholder={'Username'} fontclassname="far fa-user" />
            <Input
                placeholder={'Email Address'}
                fontclassname="fas fa-envelope"
            />
            <Input
                type={'password'}
                placeholder={'Password'}
                fontclassname="fas fa-unlock-alt"
            />
            <Button text="Sign Up" />
        </form>
    )
}

export default RegisterForm
