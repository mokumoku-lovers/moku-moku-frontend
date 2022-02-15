import React from 'react'
import classes from './ProfileCard.module.css'
import { Link } from 'react-router-dom'
import NavUserInfo from './NavUserInfo'
import NavUserInfoLoader from './NavUserInfoLoader'
import { useSelector } from 'react-redux'

const ProfileCard = () => {
    const { user, status } = useSelector((store) => store.user)

    return (
        <div className={classes.container}>
            {status !== 'succeeded' || !user ? (
                <NavUserInfoLoader />
            ) : (
                <NavUserInfo email={user.email} username={user.username} />
            )}
            <Link to="/edit-profile/" className={classes.settings}>
                Settings
            </Link>
            <div className={classes.logout}>Logout</div>
        </div>
    )
}

export default ProfileCard
