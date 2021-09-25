import React from 'react'
import classes from './ButtonSecondary.module.css'

const ButtonSecondary = (props) => {
    return (
        <button {...props} className={classes.button}>
            <div className={classes.gradientText}> {props.children}</div>
        </button>
    )
}

export default ButtonSecondary
