import React from 'react'
import classes from './MessageBox.module.css'

const MessageBox = (props) => {
    return (
        <div className={classes.container}>
            <p>{props.children}</p>
            <button className={classes.btn} onClick={props.onClickDismiss}>
                Dismiss
            </button>
        </div>
    )
}

export default MessageBox
