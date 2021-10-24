import React, {useState} from "react";
import classes from './StudyCard.module.css';

const StudyCard = () => {
    /*  Card front side: false
    *   Card back side: true
    */
    const [cardState, flipCard] = useState(true)

    return (
        <div className={classes.card}>
            { cardState ?
                <div>
                    <h1 className={classes.wordFront}> Apple </h1>
                    <div className={classes.separator}/>
                    <h1 className={classes.wordFront}> りんご </h1>
                </div>
                :
                <h1 className={classes.wordFront}> Apple </h1>
            }
        </div>
    )
}

export default StudyCard;