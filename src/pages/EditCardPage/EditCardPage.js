import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './EditCardPage.module.css'
import CreateDeckForm from './CreateDeckForm'

const EditCardPage = (props) => {
    const [deckTitle, setTitle] = useState('')

    const onClickCreateDeck = (e, title) => {
        e.preventDefault()
        console.log(title)
    }

    return (
        <div className={classes.container}>
            <NavBar />
            <CreateDeckForm onClickCreateDeck={onClickCreateDeck} />
        </div>
    )
}

export default EditCardPage
