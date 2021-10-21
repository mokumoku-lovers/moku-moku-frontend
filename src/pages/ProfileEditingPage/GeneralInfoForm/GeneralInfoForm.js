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

    return <div></div>
}

export default GeneralInfoForm
