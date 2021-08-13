import React from 'react'
import UserInfoSection from './UserInfoSection/UserInfoSection'
import classes from './UserProfile.module.css'

const UserProfile = () => {
    return (
        <div className={classes.container }>
            <UserInfoSection />
        </div>
    )
}

export default UserProfile
