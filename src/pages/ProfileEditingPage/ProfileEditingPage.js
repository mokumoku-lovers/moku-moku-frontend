import React from 'react'
import GeneralInfoForm from './GeneralInfoForm/GeneralInfoForm'
import NavBar from '../../components/NavBar/NavBar'
import Sidebar from './Sidebar/Sidebar'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'

const ProfileEditingPage = () => {
    return (
        <div>
            <NavBar />
            <Sidebar />
            <GeneralInfoForm />
            <ChangePasswordForm />
        </div>
    )
}

export default ProfileEditingPage
