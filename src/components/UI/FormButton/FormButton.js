// create a form button
import React from 'react'
import classes from './FormButton.module.css'

const FormButton = (props) => {
    return (
        <button
            type="submit"
            className={`${classes.btn} ${!props.valid && classes.invalid}`}
            disabled={!props.valid}>
            {props.text}
        </button>
    )
}

export default FormButton
