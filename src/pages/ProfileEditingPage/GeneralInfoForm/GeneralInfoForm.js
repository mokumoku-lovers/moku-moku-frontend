import React, { useState } from 'react'
import Input from '../../../components/UI/Input/Input'
import TextArea from '../../../components/UI/TextArea/TextArea'
import classes from './GeneralInfoForm.module.css'
import Button from '../../../components/UI/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserProfile } from '../../../features/user/userSlice'
import Alert from '../../../components/UI/Alert/Alert'

const emailRegex = /^[\w-\\.]+@([\w-]+\.)+[\w-]{2,4}$/

const GeneralInfoForm = () => {
    const { user } = useSelector((store) => store.user)

    const [name, setName] = useState(user.display_name || '')

    const [username, setUsername] = useState(user.username || '')
    const [usernameTouched, setUsernameTouched] = useState(false)
    const usernameValid =
        username.trim().length >= 3 && username.trim().length < 500

    const [email, setEmail] = useState(user.email)
    const [emailTouched, setEmailTouched] = useState(false)
    const emailValid =
        email.trim().length > 0 && emailRegex.test(String(email).toLowerCase())

    const [bio, setBio] = useState(user.biography)
    const [alert, setAlert] = useState(null)

    // redux hooks
    const dispatch = useDispatch()
    const { id: userId } = useSelector((store) => store.user.user)

    const onNameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const onUsernameChangeHandler = (event) => {
        setUsernameTouched(true)
        setUsername(event.target.value)
    }
    const onEmailChangeHandler = (event) => {
        setEmailTouched(true)
        setEmail(event.target.value)
    }
    const onBioChangeHandler = (event) => {
        setBio(event.target.value)
    }

    const onSubmitHandler = async (event) => {
        event.preventDefault()
        const formData = {
            display_name: name,
            username,
            email,
            biography: bio,
        }
        const res = await dispatch(updateUserProfile({ userId, formData }))

        if (res.type === 'users/updateUserProfile/fulfilled') {
            setAlert({ type: 'info', message: 'Update info successfully!' })
        } else if (res.type === 'users/updateUserProfile/rejected') {
            setAlert({ type: 'danger', message: 'Something went wrong!' })
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
                    <label htmlFor="display name">Display Name</label>
                    <Input
                        className={classes.input}
                        id="display name"
                        name="display name"
                        type="text"
                        value={name}
                        fontclassname="far fa-user"
                        placeholder="Enter your new display name"
                        onChange={onNameChangeHandler}
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="username">Username</label>
                    <Input
                        className={classes.input}
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        fontclassname="far fa-user"
                        placeholder="Enter your new username"
                        onChange={onUsernameChangeHandler}
                        isinvalid={usernameTouched && !usernameValid ? 1 : 0}
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="email">Email Address</label>
                    <Input
                        className={classes.input}
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        fontclassname="fas fa-envelope"
                        placeholder="Enter your new email address"
                        onChange={onEmailChangeHandler}
                        isinvalid={emailTouched && !emailValid ? 1 : 0}
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="bio">Bio</label>
                    <TextArea
                        className={classes.input}
                        id="bio"
                        name="bio"
                        onChange={onBioChangeHandler}
                        placeholder="Write anything for bio"
                        rows="5"
                        value={bio}
                    />
                </div>
                <Button
                    className={classes.submit__btn}
                    type="submit"
                    disabled={!emailValid || !usernameValid}
                >
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default GeneralInfoForm
