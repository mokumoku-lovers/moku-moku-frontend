import React from 'react'
import classes from './Point.module.css'

const Point = ({ point, className }) => {
    return (
        <div className={`${className} ${classes.user_point}`}>
            <span>POINT🏆</span>
            <span>{point} PT</span>
        </div>
    )
}

export default Point
