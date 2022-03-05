import React from 'react'
import classes from './ProfileCard.module.css'
import { Link } from 'react-router-dom'
import NavUserInfo from './NavUserInfo'
import NavUserInfoLoader from './NavUserInfoLoader'
import { useSelector, useDispatch } from 'react-redux'
import { logout as userLogout } from '../../features/user/userSlice'
import { logout as authLogout } from '../../features/auth/authSlice'

const ProfileCard = () => {
    const { user, status } = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch(userLogout())
        dispatch(authLogout())
    }

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
            <div
                style={{
                    cursor: 'pointer',
                }}
                onClick={handleLogout}
                className={classes.logout}
            >
                Logout
            </div>
        </div>
    )
}

export default ProfileCard
