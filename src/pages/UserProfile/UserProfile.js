import React from 'react'
import UserCardSection from './UserCardSection/UserCardSection'
import UserInfoSection from './UserInfoSection/UserInfoSection'
import classes from './UserProfile.module.css'
import NavBar from '../../components/NavBar/NavBar'

const UserProfile = () => {
    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <div className={classes.user_profile__section}>
                    <UserInfoSection />
                    <UserCardSection />
                </div>
            </div>
        </>
    )
}

export default UserProfile
