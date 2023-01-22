import React, { useCallback, useState } from 'react'
import classes from './ImageField.module.css'
import Button from '../../../components/UI/Button/Button'
import { useDropzone } from 'react-dropzone'

const ImageField = ({ file, setFile }) => {
    const imgToDisplay = file ? URL.createObjectURL(file) : null

    const removeFile = useCallback(() => {
        setFile(null)
    }, [setFile])

    const { getRootProps, getInputProps, isDragActive, isDragReject, open } = useDropzone({
        noClick: true,
        noKeyboard: true,
        accept: 'image/jpeg, image/png',
        maxFiles: 1,

        onDropAccepted: (acceptedFiles) => {
            if (file) {
                removeFile()
            }
            setFile(acceptedFiles[0])
        },

        onDropRejected: (rejectedFiles) => {
            if (rejectedFiles.length > 1) {
                return alert('Too many files! Only one image is allowed!')
            }

            if (rejectedFiles.length && rejectedFiles[0].errors[0].code === 'file-invalid-type') {
                return alert('File type is invalid. Only image type is allowed.')
            }
        },
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
                Drag &amp; Drop to Upload Image <span className={classes.margin_and_bold}>OR</span>
                <Button type="button" onClick={open} className={classes.btn}>
                    Browse Images
                </Button>
            </p>
        )
    }

    return (
        <section className={classes.container} {...getRootProps()}>
            <input {...getInputProps()} />

            {imgToDisplay ? (
                <div className={classes.previewImgContainer}>
                    <img className={classes.previewImg} src={imgToDisplay} alt="" />

                    <Button type="button" onClick={removeFile}>
                        Remove
                    </Button>
                </div>
            ) : (
                formText
            )}
        </section>
    )
}

export default ImageField
