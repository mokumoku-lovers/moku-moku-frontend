import React from 'react'
import classes from './ProfileCard.module.css'
import { Link } from 'react-router-dom'

const NavUserInfo = ({ username, email, profile_picture }) => {
    return (
        <div className={classes.info__container}>
            <Link to="/profile/" className={classes.avatar}>
                <img
                    src={
                        profile_picture
                            ? `http://168.138.215.26:9000/users/pics/${profile_picture}`
                            : '/images/user.png'
                    }
                    alt="Avatar"
                />
            </Link>
            <h3 className={classes.username}>{username}</h3>
            <p className={classes.email}>{email}</p>
        </div>
    )
}

export default NavUserInfo
