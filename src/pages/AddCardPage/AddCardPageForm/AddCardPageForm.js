import React, { useState } from 'react'
import TextArea from '../../../components/UI/TextArea/TextArea'
import classes from './AddCardPageForm.module.css'
import Button from '../../../components/UI/Button/Button'
import ButtonSecondary from '../../../components/UI/Button/ButtonSecondary'
import { useHistory } from 'react-router'
import ImageField from '../AddCardPageImageField/ImageField'

const AddCardPageForm = () => {
    const [cardFront, setCardFront] = useState('')
    const [cardFrontErrorMessage, setCardFrontErrorMessage] = useState('')

    const [cardBack, setCardBack] = useState('')
    const [cardBackErrorMessage, setCardBackErrorMessage] = useState('')
    const history = useHistory()

    const cardFrontChangeHandler = (e) => {
        setCardFront(e.target.value)
    }

    const cardBackChangeHandler = (e) => {
        setCardBack(e.target.value)
    }

    const formSubmitHandler = (e) => {
        let formIsValid = true
        e.preventDefault()
        console.log('submitting')
        console.log({ cardFront, cardBack })

        if (cardFront === '') {
            setCardFrontErrorMessage('Text for card front is required!')
            formIsValid = false
        }

        if (cardBack === '') {
            setCardBackErrorMessage('Text for card back is required!')
            formIsValid = false
        }

        formIsValid && history.push('/profile/')
    }

    const formCancelHandler = (e) => {
        e.preventDefault()
        history.push('/profile/')
    }

    return (
        <div className={classes.form_container}>
            <form>
                <label htmlFor="card-front">
                    Card Front <span style={{ color: 'red' }}>*</span>
                </label>
                <TextArea
                    id="card-front"
                    name="card-front"
                    rows={4}
                    placeholder="Write anything for front side of the card"
                    value={cardFront}
                    onChange={cardFrontChangeHandler}
                    required
                />
                <label htmlFor="card-back">
                    Card Back <span style={{ color: 'red' }}>*</span>
                </label>
                <TextArea
                    id="card-back"
                    name="card-back"
                    rows={4}
                    placeholder="Write anything for back side of the card "
                    value={cardBack}
                    onChange={cardBackChangeHandler}
                    required
                />
                <ImageField />
                <div className={classes.buttonGroup}>
                    <ButtonSecondary onClick={formCancelHandler}>
                        Cancel
                    </ButtonSecondary>
                    <Button onClick={formSubmitHandler}>Save</Button>
                </div>
            </form>
        </div>
    )
}

export default AddCardPageForm
