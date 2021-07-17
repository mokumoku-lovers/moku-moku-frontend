import React from 'react'
import classes from './IntroSection.module.css'

const IntroSection = () => {
    return (
        <div className={classes.introSection}>
            <div className={classes.content}>
                <p className={classes.title}>FlashCard</p>
                <p className={classes.subtitle}>
                    Master any subject, one success at a time
                </p>
                <button className={classes.button}>Read More</button>
            </div>
            <div className={`${classes.circle} ${classes.circle1}`}></div>
            <div className={`${classes.circle} ${classes.circle2}`}></div>
        </div>
    )
}

export default IntroSection
