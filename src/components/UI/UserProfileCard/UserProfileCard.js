import React from 'react'
import classes from './UserProfileCard.module.css'
import Trash from '../../../assets/images/trash.svg'

const UserProfileCard = (props) => {
    return (
        <div className={classes.container}>
            <img className={classes.trashIcon} src={Trash} alt="Trash" />
            <p className={classes.title}>{props.title}</p>
            <p className={classes.text}>{props.text}</p>
        </div>
    )
}

export default UserProfileCard
