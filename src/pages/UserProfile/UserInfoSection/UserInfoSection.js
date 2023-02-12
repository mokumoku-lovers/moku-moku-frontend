import React from 'react'
import Button from '../../../components/UI/Button/Button'
import classes from './UserInfoSection.module.css'
import Point from '../../../components/UI/Point/Point'
import { Avatar } from '../../../components/UI/Avatar/Avatar'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DefaultAvatar from '../../../avatar'

const UserInfoSection = () => {
    const history = useHistory()
    const { display_name, username, biography, points, profile_picture } = useSelector((store) => store.user.user)

    const onClickCreateButton = () => {
        history.push('/create-deck')
    }

    const onClickEditButton = () => {
        history.push('/edit-profile')
    }

    return (
        <div className={classes.container}>
            {profile_picture ? (
                <Avatar className={classes.avatar} src={`http://168.138.215.26:9000/users/pics/${profile_picture}`} />
            ) : (
                <div className={classes.avatar}>
                    <DefaultAvatar width="140" height="140" />
                </div>
            )}
            <div className={classes.user_info__container}>
                <h1 className={classes.user__info__name}>{display_name ? display_name : username}</h1>
                <p className={classes.user__info__bio}>{biography ? biography : 'There is no bio yet.'}</p>
                <Point point={points} />
                <div className={classes.user_info__actions}>
                    <Button onClick={onClickCreateButton}>Create</Button>
                    <Button onClick={onClickEditButton}>Edit</Button>
                </div>
            </div>
        </div>
    )
}

export default UserInfoSection
