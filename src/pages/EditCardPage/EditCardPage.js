import React from 'react'
import NavBar from '../../components/NavBar/NavBar'
import CardItems from './CardItems'
import classes from './EditCardPage.module.css'

const EditCardPage = () => {
    return (
        <>
        <NavBar/>
            <div className={classes.container}>
                <CardItems/>
            </div>
        </>
    )
}

export default EditCardPage
