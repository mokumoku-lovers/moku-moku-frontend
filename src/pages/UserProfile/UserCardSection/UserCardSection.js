import React from 'react'
import UserProfileCard from '../../../components/UI/UserProfileCard/UserProfileCard'
import classes from './UserCardSection.module.css'

const UserCardSection = () => {
    return (
        <div className={classes.container}>
            <div className={classes.card_section}>
                <h1 className={classes.title}>All Card</h1>
                <UserProfileCard title={"Japanese N5"} text="100 vocabs" />
                <UserProfileCard title={"TOFEL"} text="100 vocabs" />
            </div>
        </div>
    )
}

export default UserCardSection
