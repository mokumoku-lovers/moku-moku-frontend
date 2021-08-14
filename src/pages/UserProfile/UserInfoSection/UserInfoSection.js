import React from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './UserInfoSection.module.css'

const UserInfoSection = () => {
    return (
        <div className={classes.container}>
            <image className={classes.avatar} src="" />
            <div className={classes.user_info__container }>
                <h1 className={classes.user__info__name}>User#8321</h1>
                <p>Seize the day</p>
                <div className={classes.user_point}>
                    <span>POINT <i className={`fas fa-trophy ${classes.trophy_icon}`}></i></span>
                    <span>7000 PT</span>
                </div>
                <div className={classes.user_info__actions}>
                    <Button>Create</Button>
                    <Button>Edit</Button>
                </div>
            </div>
        </div>
    )
}

export default UserInfoSection
