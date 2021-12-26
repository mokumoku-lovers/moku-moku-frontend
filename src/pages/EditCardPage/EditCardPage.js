import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CardItems from './CardItems'
import classes from './EditCardPage.module.css'
import EditCardPageHeader from './EditCardPageHeader'

const EditCardPage = () => {
    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <EditCardPageHeader />
                <CardItems />
            </div>
        </>
    )
}

export default EditCardPage
