// create a html input element with reactjs hook with arrow function
import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <input
            {...props}
            onChange={props.onChange}
            className={classes.formInput}
            type={props.type}
            placeholder={props.placeholder}
            defaultValue={props.defaultValue}
        />
    )
}

export default Input
