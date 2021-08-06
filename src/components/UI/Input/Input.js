// create a html input element with reactjs hook with arrow function
import React from 'react'
import classes from './Input.module.css'

const Input = (props) => {
    return (
        <div className={classes.container}>
            <input
                {...props}
                onChange={props.onChange}
                className={classes.formInput}
            />
            <i className={`${classes.icon} ${props.fontclassname}`}></i>
        </div>
    )
}

export default Input
