import React from 'react'
import classes from './ProfileCard.module.css'
import { Link } from 'react-router-dom'
import DefaultAvatar from '../../avatar'

const NavUserInfo = ({ username, email, profile_picture }) => {
    return (
        <div className={classes.info__container}>
            <Link to="/profile/" className={classes.avatar}>
                {profile_picture ? (
                    <img src={`https://168.138.215.26:9000/users/pics/${profile_picture}`} alt="Avatar" />
                ) : (
                    <DefaultAvatar width="55" height="55" />
                )}
            </Link>
            <h3 className={classes.username}>{username}</h3>
            <p className={classes.email}>{email}</p>
        </div>
    )
}

export default NavUserInfo
