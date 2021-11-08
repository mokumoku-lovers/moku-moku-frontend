import React from 'react'
import classes from './Avatar.module.css'

export const Avatar = (props) => {
    return (
        <img
            className={`${props.className} ${classes.avatar}`}
            alt="User Profile"
            src={props.src}
        />
    )
}
