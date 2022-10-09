import React from 'react'
import classes from './ProfileCard.module.css'
import { Link } from 'react-router-dom'
import NavUserInfo from './NavUserInfo'
import NavUserInfoLoader from './NavUserInfoLoader'
import { useSelector, useDispatch } from 'react-redux'

const ProfileCard = () => {
    const { user } = useSelector((store) => store.user)
    const dispatch = useDispatch()

    const handleLogout = () => {
        dispatch({type: 'logout'})
    }

    return (
        <div className={classes.container}>
            {!user ? (
                <NavUserInfoLoader />
            ) : (
                <NavUserInfo
                    email={user.email}
                    username={
                        user.display_name ? user.display_name : user.username
                    }
                />
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
