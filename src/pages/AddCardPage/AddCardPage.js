import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import AddCardPageForm from './AddCardPageForm/AddCardPageForm'
import classes from './AddCardPage.module.css'

const AddCardPage = () => {
    return (
        <div className={classes.container}>
            <NavBar />
            <AddCardPageForm />
        </div>
    )
}

export default AddCardPage
