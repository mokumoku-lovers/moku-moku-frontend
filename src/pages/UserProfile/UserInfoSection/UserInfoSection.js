import React from 'react'
import classes from './UserInfoSection.module.css'

const UserInfoSection = () => {
    return (
        <div className={classes.container }>
            <image className={classes.avatar} src="" />
            <div className={classes.user_info__container }>
                <h1>User#8321</h1>
                <p>Seize the day</p>
                <div className={classes.user_point}>
                    <span>POINT</span>
                    <span>7000 PT</span>
                </div>
            </div>
        </div>
    )
}

export default UserInfoSection
