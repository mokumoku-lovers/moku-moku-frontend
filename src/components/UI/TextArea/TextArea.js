import React from 'react'
import classes from './TextArea.module.css'

const TextArea = (props) => {
    return (
        <div className={props.className}>
            <textarea
                {...props}
                className={`${classes.textarea} ${
                    props.errorborder && classes.errorBorder
                } `}
            >
                {props.text}
            </textarea>
        </div>
    )
}

export default TextArea
