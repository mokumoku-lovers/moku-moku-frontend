import React from 'react'
import classes from './UserProfileCard.module.css'

const UserProfileCard = (props) => {
    return (
        <div className={classes.container}>
            <p className={classes.title}>{props.title}</p>
            <p className={classes.text}>{props.text}</p>
        </div>
    )
}

export default UserProfileCard
