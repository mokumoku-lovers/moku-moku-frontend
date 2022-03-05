import React, { useState } from 'react'
import classes from './ProfileEditingPage.module.css'
import GeneralInfoForm from './GeneralInfoForm/GeneralInfoForm'
import NavBar from '../../components/NavBar/NavBar'
import Sidebar from './Sidebar/Sidebar'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'
import { Avatar } from '../../components/UI/Avatar/Avatar'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const ProfileEditingPage = (props) => {
    const [isEditProfile, setIsEditProfile] = useState(
        props.isEditProfile || true
    )

    const onClickEditProfile = () => {
        setIsEditProfile(true)
    }

    const onClickChangePassword = () => {
        setIsEditProfile(false)
    }

    const { display_name } = useSelector((store) => store.user.user)

    return (
        <>
            <NavBar />
            <section className={classes.container}>
                <Sidebar
                    isEditProfile={isEditProfile}
                    onClickEditProfile={onClickEditProfile}
                    onClickChangePassword={onClickChangePassword}
                />
                <div className={classes.separator} />
                <div className={classes.formSection}>
                    <div className={classes.userInfo}>
                        <div className={classes.userAvatar}>
                            <Avatar />
                        </div>
                        <div className={classes.username}>
                            <h3>
                                {display_name ? display_name : 'Display Name'}
                            </h3>
                            {isEditProfile && (
                                <Link to="/">Change Profile Photo</Link>
                            )}
                        </div>
                    </div>
                    {isEditProfile ? (
                        <GeneralInfoForm />
                    ) : (
                        <ChangePasswordForm />
                    )}
                </div>
            </section>
        </>
    )
}

export default ProfileEditingPage
