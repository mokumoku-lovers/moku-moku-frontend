import React from 'react'
import classes from './Alert.module.css'

const Alert = (props) => {
    return (
        <div
            className={`${props.className} ${classes.alert} ${
                classes[`${props.alert_type}`]
            }`}>
            <div className={classes.alert__text}>{props.children}</div>
            <div onClick={props.onDimiss} className={classes.alert__icon}>
                <i className={`fas fa-${props.icon}`}></i>
            </div>
        </div>
    )
}

export default Alert
