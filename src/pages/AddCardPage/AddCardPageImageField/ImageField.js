import React, { useCallback, useState } from 'react'
import classes from './ImageField.module.css'
import Button from '../../../components/UI/Button/Button'
import { useDropzone } from 'react-dropzone'

const ImageField = () => {
    const [file, setFile] = useState(null)

    const removeFile = useCallback(() => {
        setFile(null)
    }, [])

    const onDrop = useCallback(
        (acceptedFiles) => {
            setFiles(
                acceptedFiles.map((file, idx) => (
                    <p className={classes.formText} key={idx}>
                        {file.name}{' '}
                        <Button type="button" onClick={() => removeFile(idx)}>
                            Cancel
                        </Button>
                    </p>
                ))
            )
        },
        [removeFile]
    )

    const { getRootProps, getInputProps, isDragActive, isDragReject, open } =
        useDropzone({
            noClick: true,
            noKeyboard: true,
            accept: 'image/jpeg, image/png',
            onDrop,
        })

    let formText

    if (isDragReject) {
        formText = (
            <p style={{ color: 'red' }} className={classes.formText}>
                Only one image is allowed.
            </p>
        )
    } else if (isDragActive) {
        formText = (
            <p style={{ color: '#52b69a' }} className={classes.formText}>
                Drop the image here ...
            </p>
        )
    } else {
        formText = (
            <p className={classes.formText}>
                Drag &amp; Drop to Upload Image{' '}
                <span className={classes.margin_and_bold}>OR</span>
                <Button type="button" onClick={open} className={classes.btn}>
                    Browse Images
                </Button>
            </p>
        )
    }

    return (
        <section className={classes.container} {...getRootProps()}>
            <input {...getInputProps()} />

            {file ? file : formText}
        </section>
    )
}

export default ImageField
