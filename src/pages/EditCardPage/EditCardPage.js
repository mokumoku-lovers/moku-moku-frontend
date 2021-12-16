import React, { useState } from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './EditCardPage.module.css'
import CreateDeckForm from './CreateDeckForm'
import EditCardPageHeader from './EditCardPageHeader'

const EditCardPage = (props) => {
    const [deckTitle, setTitle] = useState('')
    const [showDeckForm, setShowDeckForm] = useState(true)

    const onClickCreateDeck = (e, title) => {
        e.preventDefault()
        console.log(title)
        setTitle(title)
        setShowDeckForm(false)
    }

    return (
        <div className={classes.container}>
            <NavBar />
            {showDeckForm && (
                <CreateDeckForm onClickCreateDeck={onClickCreateDeck} />
            )}
            <EditCardPageHeader title={deckTitle} />
        </div>
    )
}

export default EditCardPage
