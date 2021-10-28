// create a html input element with reactjs hook with arrow function
import React, { useState, useRef } from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    const [showPassword, setShowPassword] = useState(false)
    const inputRef = useRef()

    const togglePassword = () => {
        if (showPassword) {
            inputRef.current.type = 'password'
        } else {
            inputRef.current.type = 'text'
        }
        setShowPassword(!showPassword)
    }

    return (
        <div className={`${props.className} ${classes.container}`}>
            <input
                ref={inputRef}
                {...props}
                onChange={props.onChange}
                className={`${classes.formInput} ${
                    props.isinvalid && classes.invalid
                }`}
                autoComplete="on"
            />
            <i className={`${classes.icon} ${props.fontclassname}`}></i>
            {props.type === 'password' && (
                <i
                    onClick={togglePassword}
                    className={`${
                        showPassword ? 'fas fa-eye-slash' : 'fas fa-eye'
                    } ${classes.showPassword}`}></i>
            )}
        </div>
    )
}

export default Input
