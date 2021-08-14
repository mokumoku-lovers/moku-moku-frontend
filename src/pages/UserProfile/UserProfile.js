import React from 'react'
import UserCardSection from './UserCardSection/UserCardSection'
import UserInfoSection from './UserInfoSection/UserInfoSection'
import classes from './UserProfile.module.css'

const UserProfile = () => {
    return (
        <div className={classes.container}>
            <div className={classes.user_profile__section}>
                <UserInfoSection />
                <UserCardSection />
            </div>
        </div>
    )
}

export default UserProfile
