import React, {useState} from "react";
import classes from './StudyCard.module.css';

const StudyCard = () => {
    /*  Card front side: false
    *   Card back side: true
    */
    const [cardState, flipCard] = useState(true)

    return (
        <div className={classes.card}>
            <h1 className={classes.wordFront}> Apple </h1>
        </div>
    )
}

export default StudyCard;