import React from 'react'
import classes from './Point.module.css'

const Point = ({ point }) => {
    return (
        <div className={classes.user_point}>
            <span>
                POINT <i className={`fas fa-trophy ${classes.trophy_icon}`}></i>
            </span>
            <span>{point} PT</span>
        </div>
    )
}

export default Point
