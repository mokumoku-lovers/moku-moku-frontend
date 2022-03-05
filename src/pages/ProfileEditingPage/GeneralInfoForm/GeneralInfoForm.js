import React, { useState } from 'react'
import Input from '../../../components/UI/Input/Input'
import TextArea from '../../../components/UI/TextArea/TextArea'
import classes from './GeneralInfoForm.module.css'
import Button from '../../../components/UI/Button/Button'
import { useSelector, useDispatch } from 'react-redux'
import { updateUserProfile } from '../../../features/user/userSlice'
import { useHistory } from 'react-router-dom/cjs/react-router-dom.min'

const GeneralInfoForm = () => {
    const { user } = useSelector((store) => store.user)

    const [name, setName] = useState(user.display_name)
    const [username, setUsername] = useState(user.username)
    const [email, setEmail] = useState(user.email)
    const [bio, setBio] = useState(user.bio)

    // redux hooks
    const dispatch = useDispatch()
    const { id: userId } = useSelector((store) => store.user.user)

    // react router hook
    const history = useHistory()

    const onNameChangeHandler = (event) => {
        setName(event.target.value)
    }
    const onUsernameChangeHandler = (event) => {
        setUsername(event.target.value)
    }
    const onEmailChangeHandler = (event) => {
        setEmail(event.target.value)
    }
    const onBioChangeHandler = (event) => {
        setBio(event.target.value)
    }

    const resetField = () => {
        setName('')
        setUsername('')
        setEmail('')
        setBio('')
        history.push('/profile')
    }

    const onSubmitHandler = (event) => {
        event.preventDefault()
        console.log('Submit')
        const formData = {
            display_name: name,
            username,
            email,
            biography: bio,
        }
        dispatch(updateUserProfile({ userId, formData }))
        resetField()
    }

    return (
        <div className={classes.container}>
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
                <Button className={classes.submit__btn} type="submit">
                    Submit
                </Button>
            </form>
        </div>
    )
}

export default GeneralInfoForm
