import React from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './UserInfoSection.module.css'
import Point from '../../../components/UI/Point/Point'
import { Avatar } from '../../../components/UI/Avatar/Avatar'
import icon from '../../../icon.svg'
import { useHistory } from 'react-router-dom'

const UserInfoSection = () => {
    const history = useHistory()

    const onClickCreateButton = () => {
        history.push('/create-deck')
    }

    return (
        <div className={classes.container}>
            <Avatar className={classes.avatar} src={icon} />
            <div className={classes.user_info__container}>
                <h1 className={classes.user__info__name}>User#8321</h1>
                <p className={classes.user__info__bio}>Seize the day</p>
                <Point point={7000} />
                <div className={classes.user_info__actions}>
                    <Button onClick={onClickCreateButton}>Create</Button>
                    <Button>Edit</Button>
                </div>
            </div>
        </div>
    )
}

export default UserInfoSection
