import React from 'react'
import classes from './EditCardPageHeader.module.css'

const EditCardPageHeader = (props) => {
    return (
        <div className={classes.container}>
            <div>
                <div>
                    <p className={classes.deck__title}>Japanese</p>
                </div>
                <p className={classes.card__count}>0 card</p>
            </div>
        </div>
    )
}

export default EditCardPageHeader
