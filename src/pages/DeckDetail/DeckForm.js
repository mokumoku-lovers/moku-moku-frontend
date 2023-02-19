import React, { useState } from 'react'
import Model from '../../components/UI/Model/Model'
import classes from './CreateDeckPage.module.css'
import Input from '../../components/UI/Input/Input'
import ButtonSecondary from '../../components/UI/Button/ButtonSecondary'
import Button from '../../components/UI/Button/Button'
import { useSelector } from 'react-redux'

const DeckForm = ({ edit, onCancelHandler, onSaveHandler }) => {
    const oldTitle = useSelector((state) => state.deck.title)
    const [title, setTitle] = useState(edit ? oldTitle : '')

    const isFormValid = title !== ''

    return (
        <Model>
            <form
                className={classes.form}
                onSubmit={(e) => onSaveHandler(e, title)}
            >
                <h1>{edit ? 'Edit' : 'Create'} Your Deck</h1>

                <div className={classes.formControl}>
                    <label htmlFor="title">
                        Deck Title <span style={{ color: 'red' }}>*</span>
                    </label>
                    <Input
                        value={title}
                        placeholder="Enter your deck title"
                        onChange={(e) => setTitle(e.target.value)}
                        fontclassname="fas fa-file-alt"
                    />
                </div>

                <div className={classes.buttons}>
                    <ButtonSecondary
                        type="button"
                        onClick={() => {
                            if (edit) setTitle(oldTitle)
                            onCancelHandler()
                        }}
                    >
                        Cancel
                    </ButtonSecondary>
                    <Button type="submit" disabled={!isFormValid}>
                        Save
                    </Button>
                </div>
            </form>
        </Model>
    )
}

export default DeckForm
