import React from 'react'
import classes from './Badge.module.css'

const Badge = () => {
    return (
        <div className={classes.container}>
            <div className={classes.badge}>
                <p>Rank 1st 🏆</p>
            </div>
        </div>
    )
}

export default Badge
