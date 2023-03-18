import React from 'react'
import classes from './StudyCard.module.css'

const StudyCard = ({ cardState, cardItem }) => {
    const renderImageLayout = () => {
        return (
            <div style={{ width: '100%' }}>
                <div className={classes.image_question}>
                    <img
                        style={{
                            maxHeight: cardState ? '300px' : '500px',
                        }}
                        className={classes.image_question_column + ' ' + classes.image}
                        src={`https://mokumoku.zsh.jp:9002/card/pics/${cardItem.image}`}
                        alt="card_image"
                    />
                    <h1 className={classes.wordFront + ' ' + classes.image_question_column}>{cardItem.front}</h1>
                </div>
                {cardState && (
                    <div>
                        <div className={classes.separator} />
                        <h1 className={classes.wordFront}> {cardItem.back} </h1>
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

    return <div className={classes.card}>{cardItem.image ? renderImageLayout() : renderNoImageLayout()}</div>
}

export default StudyCard
