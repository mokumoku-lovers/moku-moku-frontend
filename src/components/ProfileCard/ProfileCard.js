import React from 'react'
import Icon from '../../icon.svg'
import classes from './ProfileCard.module.css'

const ProfileCard = () => {
    return (
        <div className={classes.container}>
            <div className={classes.info__container}>
                <img src={Icon} alt="Avatar" />

                <h3 className={classes.username}>Username</h3>
                <p className={classes.email}>smileycat@gmail.com</p>
            </div>
            <p className={classes.settings}>Settings</p>
            <div className={classes.logout}>Logout</div>
        </div>
    )
}

export default ProfileCard
