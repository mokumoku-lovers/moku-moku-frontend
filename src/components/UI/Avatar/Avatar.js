import React from 'react'
import classes from './Avatar.module.css'

export const Avatar = (prop) => {
    return (
        <img
            className={`${prop.className} ${classes.avatar}`}
            alt="User Profile"
            src=""
        />
    )
}
