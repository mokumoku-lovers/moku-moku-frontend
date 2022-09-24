import React, { useState } from 'react'
import classes from './StudyCard.module.css'

const StudyCard = ({ cardState, cardItem }) => {
    //  Different layout depending on image attribute
    const [image, changeLayout] = useState(false)

    const renderImageLayout = () => {
        return (
            <div>
                <div className={classes.image_question}>
                    <img
                        className={
                            classes.image_question_column + ' ' + classes.image
                        }
                        src="https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg"
                        alt="card_image"
                    />
                    <h1
                        className={
                            classes.wordFront +
                            ' ' +
                            classes.image_question_column
                        }
                    >
                        {' '}
                        What is the name of this animal?{' '}
                    </h1>
                </div>
                {cardState && (
                    <div>
                        <div className={classes.separator} />
                        <h1 className={classes.wordFront}> 犬 </h1>
                    </div>
                )}
            </div>
        )
    }

    const renderNoImageLayout = () => {
        return (
            <div>
                <h1 className={classes.wordFront}> {cardItem.front} </h1>
                {cardState && (
                    <div>
                        <div className={classes.separator} />
                        <h1 className={classes.wordFront}> {cardItem.back} </h1>
                    </div>
                )}
            </div>
        )
    }

    return (
        <div className={classes.card}>
            {image ? renderImageLayout() : renderNoImageLayout()}
        </div>
    )
}

export default StudyCard
