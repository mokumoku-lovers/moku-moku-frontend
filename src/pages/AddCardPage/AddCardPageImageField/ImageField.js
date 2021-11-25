import React from 'react'
import classes from './ImageField.module.css'
import Button from '../../../components/UI/Button/Button'
import { useDropzone } from 'react-dropzone'

const ImageField = () => {
    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        noClick: true,
        noKeyboard: true,
        accept: 'image/jpeg, image/png',
    })

    return (
        <section className={classes.container}>
            <input type="file" />
            <p className={classes.formText}>
                Drag & Drop to Upload Image <span>OR</span>
                <Button type="button" onClick={open} className={classes.btn}>
                    Browse Images
                </Button>
            </p>
        </section>
    )
}

export default ImageField
