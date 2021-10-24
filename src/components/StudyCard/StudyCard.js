import React, {useState} from "react";
import classes from './StudyCard.module.css';

const StudyCard = () => {
    //  Card front side: false
    //  Card back side: true
    const [cardState, flipCard] = useState(false)
    //  Different layout depending on image attribute
    const [image, changeLayout] = useState(true)

    const renderImageLayout = () => {
        return cardState ?
            <div>
                <h1 className={classes.wordFront}> Apple </h1>
                <h1 className={classes.wordFront}> What is the name of this animal? </h1>
            </div>
            :
            <div>
                <div className={classes.image_question}>
                    <img className={classes.image_question_column + ' ' + classes.image}
                        src="https://media.nature.com/lw800/magazine-assets/d41586-020-01430-5/d41586-020-01430-5_17977552.jpg" alt="card_image"/>
                    <h1 className={ classes.wordFront + ' ' + classes.image_question_column}> What is the name of this animal? </h1>
                </div>
                <div className={classes.separator}/>
                <h1 className={classes.wordFront}> 犬 </h1>
            </div>

    }

    const renderNoImageLayout = () => {
        return cardState ?
            <div>
                <h1 className={classes.wordFront}> Apple </h1>
                <div className={classes.separator}/>
                <h1 className={classes.wordFront}> りんご </h1>
            </div>
            :
            <h1 className={classes.wordFront}> Apple </h1>
    }

    return (
        <div className={classes.card}>
            {
                image ? renderImageLayout() : renderNoImageLayout()
            }
        </div>
    )
}

export default StudyCard;