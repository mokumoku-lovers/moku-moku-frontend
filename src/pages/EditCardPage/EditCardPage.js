import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './EditCardPage.module.css'
import EditCardPageHeader from './EditCardPageHeader'

const EditCardPage = (props) => {
    return (
        <div className={classes.container}>
            <NavBar />
            <EditCardPageHeader />
        </div>
    )
}

export default EditCardPage
