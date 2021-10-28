import React, { useState } from 'react'
import GeneralInfoForm from './GeneralInfoForm/GeneralInfoForm'
import NavBar from '../../components/NavBar/NavBar'
import Sidebar from './Sidebar/Sidebar'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'

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
        <div>
            <NavBar />

            <Sidebar
                isEditProfile={isEditProfile}
                onClickEditProfile={onClickEditProfile}
                onClickChangePassword={onClickChangePassword}
            />

            {isEditProfile ? <GeneralInfoForm /> : <ChangePasswordForm />}
        </div>
    )
}

export default ProfileEditingPage
