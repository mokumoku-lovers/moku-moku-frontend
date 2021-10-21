import React, { useState } from 'react'
import Input from '../../../components/UI/Input/Input'
import TextArea from '../../../components/UI/TextArea/TextArea'
import classes from './GeneralInfoForm.module.css'

const GeneralInfoForm = () => {
    const [name, setName] = useState('')
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [bio, setBio] = useState('')

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

    return (
        <div className={classes.container}>
            <form>
                <div className={classes.row}>
                    <label htmlFor="name">Display Name</label>
                    <Input
                        className={classes.input}
                        id="name"
                        name="name"
                        type="text"
                        value={name}
                        fontclassname="far fa-user"
                        onChange={onNameChangeHandler}
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="name">Username</label>
                    <Input
                        className={classes.input}
                        id="username"
                        name="username"
                        type="text"
                        value={username}
                        fontclassname="far fa-user"
                        onChange={onUsernameChangeHandler}
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="name">Email Address</label>
                    <Input
                        className={classes.input}
                        id="email"
                        name="email"
                        type="email"
                        value={email}
                        fontclassname="fas fa-envelope"
                        onChange={onEmailChangeHandler}
                    />
                </div>
                <div className={classes.row}>
                    <label htmlFor="bio">Bio</label>
                    <TextArea
                        className={classes.input}
                        id="name"
                        name="name"
                        onChange={onBioChangeHandler}
                        rows="5"
                        value={bio}
                    />
                </div>
            </form>
        </div>
    )
}

export default GeneralInfoForm
