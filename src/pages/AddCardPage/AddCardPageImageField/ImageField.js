import React from 'react'
import classes from './ImageField.module.css'
import Button from '../../../components/UI/Button/Button'

const ImageField = () => {
    return (
        <section className={classes.container}>
            <input type="file" />
            <p className={classes.formText}>
                Drag & Drop to Upload Image <span>OR</span>
                <Button className={classes.btn}>Browse Images</Button>
            </p>
        </section>
    )
}

export default ImageField
