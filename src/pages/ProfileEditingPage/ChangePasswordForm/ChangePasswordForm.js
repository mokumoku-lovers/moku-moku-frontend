import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import classes from './ChangePasswordForm.module.css'
import { updateUserPassword } from '../../../features/user/userSlice'
import Alert from '../../../components/UI/Alert/Alert'

const ChangePasswordForm = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [newPassword, setNewPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [alert, setAlert] = useState(null)

    // redux hooks
    const userId = useSelector((store) => store.user.user.id)
    const dispatch = useDispatch()

    const onOldPasswordChangeHandler = (event) => {
        setOldPassword(event.target.value)
    }
    const onNewPasswordChangeHandler = (event) => {
        setNewPassword(event.target.value)
    }
    const onConfirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value)
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        console.log('Submit')
        const formData = {
            old_password: oldPassword,
            password: newPassword,
            password_r: confirmPassword,
        }
        const res = await dispatch(updateUserPassword({ formData, userId }))

        if (res.type === 'user/updateUserPassword/rejected') {
            setAlert({ type: 'danger', message: res.payload.message })
        } else if (res.type === 'user/updateUserPassword/fulfilled') {
            setAlert({ type: 'info', message: res.payload.data })
    }
    }

    return (
        <div className={classes.container}>
            {alert && (
                <Alert
                    icon="times"
                    onDimiss={onDimissAlertHandler}
                    alert_type={alert.type}
                >
                    {alert.message}
                </Alert>
            )}
            <br />
            <form onSubmit={onSubmitHandler}>
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
                <Button className={classes.submit__btn} type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default ChangePasswordForm
