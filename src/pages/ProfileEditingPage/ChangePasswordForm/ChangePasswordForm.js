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

    return (
        <div className={classes.container}>
            <form>
                <div className={classes.row}>
                    <label htmlFor="old password">Old Password</label>
                    <Input
                        className={classes.input}
                        id="old password"
                        name="old password"
                        type="password"
                        value={oldPassword}
                        fontclassname="fas fa-unlock-alt"
                        onChange={onOldPasswordChangeHandler}
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="new password">New Password</label>
                    <Input
                        className={classes.input}
                        id="new password"
                        name="new password"
                        type="password"
                        value={newPassword}
                        fontclassname="fas fa-unlock-alt"
                        onChange={onNewPasswordChangeHandler}
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="confirm password">Confirm Password</label>
                    <Input
                        className={classes.input}
                        id="confirm password"
                        name="confirm password"
                        type="password"
                        value={confirmPassword}
                        fontclassname="fas fa-unlock-alt"
                        onChange={onConfirmPasswordChangeHandler}
                    />
                </div>
            </form>
        </div>
    )
}

export default ChangePasswordForm
