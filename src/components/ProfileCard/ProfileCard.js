import React from 'react'
import Icon from '../../icon.svg'
import classes from './ProfileCard.module.css'
import { Link } from 'react-router-dom'

const ProfileCard = () => {
    return (
        <div className={classes.container}>
            <div className={classes.info__container}>
                <Link to="/profile/" className={classes.avator}>
                    <img src={Icon} alt="Avatar" />
                </Link>
                <h3 className={classes.username}>Username</h3>
                <p className={classes.email}>smileycat@gmail.com</p>
            </div>
            <Link to="/edit-profile/" className={classes.settings}>
                Settings
            </Link>
            <div className={classes.logout}>Logout</div>
        </div>
    )
}

export default ProfileCard
