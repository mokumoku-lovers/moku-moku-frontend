import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import Sidebar from './Sidebar/Sidebar'
import ChangePasswordForm from './ChangePasswordForm/ChangePasswordForm'

const ProfileEditingPage = () => {
    return (
        <div>
            <NavBar />
            <Sidebar />
            Profile Editing
            <ChangePasswordForm />
        </div>
    )
}

export default ProfileEditingPage
