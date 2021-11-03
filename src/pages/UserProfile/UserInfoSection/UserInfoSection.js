import React from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './UserInfoSection.module.css'
import Point from '../../../components/UI/Point/Point'
import { Avatar } from '../../../components/UI/Avatar/Avatar'

const UserInfoSection = () => {
    return (
        <div className={classes.container}>
            <Avatar className={classes.avatar} src="" />
            <div className={classes.user_info__container}>
                <h1 className={classes.user__info__name}>User#8321</h1>
                <p className={classes.user__info__bio}>Seize the day</p>
                <Point point={7000} />
                <div className={classes.user_info__actions}>
                    <Button>Create</Button>
                    <Button>Edit</Button>
                </div>
            </div>
        </div>
    )
}

export default UserInfoSection
