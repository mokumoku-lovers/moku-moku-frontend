import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AddCardPageForm from './AddCardPageForm/AddCardPageForm'
import classes from './AddCardPage.module.css'
import { useParams } from 'react-router-dom'

const AddCardPage = () => {
    const { cardId } = useParams()

    return (
        <div className={classes.container}>
            <NavBar />
            <AddCardPageForm cardId={cardId} />
        </div>
    )
}

export default AddCardPage
