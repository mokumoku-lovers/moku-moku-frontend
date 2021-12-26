import React from 'react'
import classes from './Model.module.css'

const Model = (props) => {
    return (
        <div className={classes.container}>
            <div className={classes.model}>{props.children}</div>
        </div>
    )
}

export default Model
