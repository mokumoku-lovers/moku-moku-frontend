import React from 'react'
import classes from './ProfileCard.module.css'
import Icon from '../../icon.svg'
import { Link } from 'react-router-dom'

const NavUserInfo = ({ username, email }) => {
    return (
        <div className={classes.info__container}>
            <Link to="/profile/" className={classes.avatar}>
                <img src={Icon} alt="Avatar" />
            </Link>
            <h3 className={classes.username}>{username}</h3>
            <p className={classes.email}>{email}</p>
        </div>
    )
}

export default NavUserInfo
