import React, { useState } from 'react'
import classes from './ProfileEditingPage.module.css'
import GeneralInfoForm from './GeneralInfoForm/GeneralInfoForm'
import NavBar from '../../components/NavBar/NavBar'
import Sidebar from './Sidebar/Sidebar'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'
import { Avatar } from '../../components/UI/Avatar/Avatar'
import { Link } from 'react-router-dom'

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
