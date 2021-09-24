import React from 'react'
import classes from './Badge.module.css'

const Badge = () => {
    return (
        <div className={classes.container}>
            <div className={classes.badge}>
                <p>
                    Rank 1st{' '}
                    <i className={`fas fa-trophy ${classes.trophy_icon}`}></i>
                </p>
            </div>
        </div>
    )
}

export default Badge
