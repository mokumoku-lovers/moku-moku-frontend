import { useState } from 'react'
import Input from '../../../components/UI/Input/Input'
import classes from './ChangePasswordForm.module.css'

const ChangePasswordForm = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const onOldPasswordChangeHandler = (event) => {
        setOldPassword(event.target.value)
    }
    const onNewPasswordChangeHandler = (event) => {
        setNewPassword(event.target.value)
    }
    const onConfirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    return <div></div>
}

export default ChangePasswordForm
