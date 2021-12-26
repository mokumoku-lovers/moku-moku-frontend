import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CardItems from './CardItems'
import classes from './EditCardPage.module.css'
import EditCardPageHeader from './EditCardPageHeader'

const EditCardPage = (props) => {
    return (
        <div className={classes.container}>
            <NavBar />
            <EditCardPageHeader />
            <CardItems/>
        </div>   
    )
}

export default EditCardPage
