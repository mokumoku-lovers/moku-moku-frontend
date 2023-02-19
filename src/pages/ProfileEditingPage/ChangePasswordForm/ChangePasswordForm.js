import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Button from '../../../components/UI/Button/Button'
import Input from '../../../components/UI/Input/Input'
import classes from './ChangePasswordForm.module.css'
import { updateUserPassword } from '../../../features/user/userSlice'
import Alert from '../../../components/UI/Alert/Alert'

const strongPasswordRegex =
    /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/

const checkPasswordValid = (password) =>
    !password.includes(' ') && strongPasswordRegex.test(password)

const ChangePasswordForm = () => {
    const [oldPassword, setOldPassword] = useState('')
    const [oldPasswordTouch, setOldPasswordTouch] = useState(false)

    const [newPassword, setNewPassword] = useState('')
    const [newPasswordTouch, setNewPasswordTouch] = useState(false)

    const [confirmPassword, setConfirmPassword] = useState('')
    const [confirmPasswordTouch, setConfirmPasswordTouch] = useState(false)

    const [alert, setAlert] = useState(null)

    const isOldPasswordValid = checkPasswordValid(oldPassword)
    const isNewPasswordValid = checkPasswordValid(newPassword)
    const isConfirmPasswordValid =
        checkPasswordValid(confirmPassword) && newPassword === confirmPassword

    const isFormValid =
        isOldPasswordValid && isNewPasswordValid && isConfirmPasswordValid

    // redux hooks
    const userId = useSelector((store) => store.user.user.id)
    const dispatch = useDispatch()

    const onOldPasswordChangeHandler = (event) => {
        setOldPassword(event.target.value)
        setOldPasswordTouch(true)
    }

    const onNewPasswordChangeHandler = (event) => {
        setNewPassword(event.target.value)
        setNewPasswordTouch(true)
    }

    const onConfirmPasswordChangeHandler = (event) => {
        setConfirmPassword(event.target.value)
        setConfirmPasswordTouch(true)
    }

    const resetFields = () => {
        setOldPassword('')
        setNewPassword('')
        setConfirmPassword('')
        setOldPasswordTouch(false)
        setNewPasswordTouch(false)
        setConfirmPasswordTouch(false)
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
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
            resetFields()
        }
    }

    const onDimissAlertHandler = () => {
        setAlert(null)
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
                        isinvalid={oldPasswordTouch && !isOldPasswordValid}
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
                        isinvalid={newPasswordTouch && !isNewPasswordValid}
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
                        isinvalid={
                            confirmPasswordTouch && !isConfirmPasswordValid
                        }
                    />
                </div>
                <Button
                    className={classes.submit__btn}
                    type="submit"
                    disabled={!isFormValid}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default ChangePasswordForm
