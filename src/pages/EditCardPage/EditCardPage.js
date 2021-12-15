import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import classes from './EditCardPage.module.css'
import EditCardPageHeader from './EditCardPageHeader'

const EditCardPage = () => {
    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <EditCardPageHeader />
            </div>
        </>
    )
}

export default EditCardPage
