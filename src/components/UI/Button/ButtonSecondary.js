import React from 'react'
import classes from './ButtonSecondary.module.css'

const ButtonSecondary = (props) => {
    return (
        <button {...props} className={classes.button}>
            {props.children}
        </button>
    )
}

export default ButtonSecondary
