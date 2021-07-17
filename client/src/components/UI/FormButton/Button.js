// create a form button
import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button type="submit" className={classes.btn}>
            {props.text}
        </button>
    )
}

export default Button
