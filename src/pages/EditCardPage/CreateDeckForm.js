import React from 'react'
import classes from './CreateDeckForm.module.css'
import Input from '../../components/UI/Input/Input'
import Button from '../../components/UI/Button/Button'
import ButtonSecondary from '../../components/UI/Button/ButtonSecondary'
import Model from '../../components/UI/Model/Model'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'

const CreateDeckForm = (props) => {
    const history = useHistory()

    const [title, setTitle] = useState('')

    const onChangeTitle = (e) => {
        setTitle(e.target.value)
    }

    const isFormValid = title !== ''

    return (
        <Model>
            <form
                className={classes.form}
                onSubmit={(e) => props.onClickCreateDeck(e, title)}
            >
                <h1>Create Your Deck</h1>

                <div className={classes.formControl}>
                    <label htmlFor="title">
                        Deck Title <span style={{ color: 'red' }}>*</span>
                    </label>
                    <Input
                        value={title}
                        placeholder="Enter your deck title"
                        onChange={onChangeTitle}
                        fontclassname="fas fa-file-alt"
                    />
                </div>

                <div className={classes.buttons}>
                    <ButtonSecondary
                        type="button"
                        onClick={() => {
                            history.push('/profile/')
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

export default CreateDeckForm
