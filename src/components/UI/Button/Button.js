import React from 'react'
import classes from './Button.module.css'

const Button = (props) => {
    return (
        <button {...props} className={classes.button}>
            <div className={classes.text_shadow}>{props.children}</div>
        </button>
    )
}

export default Button
