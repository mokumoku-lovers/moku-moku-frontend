import React, { useCallback, useState } from 'react'
import classes from './ImageField.module.css'
import Button from '../../../components/UI/Button/Button'
import { useDropzone } from 'react-dropzone'

const ImageField = () => {
    const [files, setFiles] = useState([])

    const onDrop = useCallback((acceptedFiles) => {
        setFiles(
            acceptedFiles.map((file, idx) => (
                <p className={classes.formText} key={idx}>
                    {file.name}
                </p>
            ))
        )
    }, [])

    const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
        noClick: true,
        noKeyboard: true,
        accept: 'image/jpeg, image/png',
        onDrop,
    })

    return (
        <section className={classes.container} {...getRootProps()}>
            <input {...getInputProps()} />
            {files.length ? (
                files
            ) : isDragActive ? (
                <p className={classes.formText}>Drop the image here ...</p>
            ) : (
                <p className={classes.formText}>
                    Drag & Drop to Upload Image <span>OR</span>
                    <Button
                        type="button"
                        onClick={open}
                        className={classes.btn}
                    >
                        Browse Images
                    </Button>
                </p>
            )}
        </section>
    )
}

export default ImageField
