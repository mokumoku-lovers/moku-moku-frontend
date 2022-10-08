import React, { useEffect, useState } from 'react'
import TextArea from '../../../components/UI/TextArea/TextArea'
import classes from './AddCardPageForm.module.css'
import Button from '../../../components/UI/Button/Button'
import ButtonSecondary from '../../../components/UI/Button/ButtonSecondary'
import { useHistory } from 'react-router'
import ImageField from '../AddCardPageImageField/ImageField'
import axios from '../../../axios/axiosInstanceFunction'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'

const AddCardPageForm = ({ cardId }) => {
    const [cardFront, setCardFront] = useState('')
    const [cardFrontErrorMessage, setCardFrontErrorMessage] = useState('')

    const [cardBack, setCardBack] = useState('')
    const [cardBackErrorMessage, setCardBackErrorMessage] = useState('')
    const history = useHistory()
    const { deckId } = useParams()
    const { cards } = useSelector((store) => store.deck)
    const [loading, setLoading] = useState(!!cardId)

    useEffect(() => {
        const fetchCard = async () => {
            if (cardId) {
                const response = await axios('http://168.138.215.26:9002/').get(
                    `/card/${cardId}`
                )

                setCardFront(response.data.front)
                setCardBack(response.data.back)
                setLoading(false)
            }
        }
        fetchCard()
    }, [cardId])

    const cardFrontChangeHandler = (e) => {
        setCardFront(e.target.value)
        setCardFrontErrorMessage('')
    }

    const cardBackChangeHandler = (e) => {
        setCardBack(e.target.value)
        setCardBackErrorMessage('')
    }

    const formSubmitHandler = async (e) => {
        let formIsValid = true
        e.preventDefault()

        if (cardFront === '') {
            setCardFrontErrorMessage('Text for card front is required!')
            formIsValid = false
        }

        if (cardBack === '') {
            setCardBackErrorMessage('Text for card back is required!')
            formIsValid = false
        }

        if (formIsValid) {
            if (cardId) {
                await axios('http://168.138.215.26:9002/').patch(
                    `/card/${cardId}`,
                    {
                        front: cardFront,
                        back: cardBack,
                    }
                )
                history.goBack()
            } else {
                const response = await axios(
                    'http://168.138.215.26:9002/'
                ).post('/card', {
                    front: cardFront,
                    back: cardBack,
                })
                console.log(response.data, 'create card')
                const { id: cardId } = response.data
                await axios('http://168.138.215.26:9002/').patch(
                    `/deck/${deckId}`,
                    {
                        cards: [...cards, cardId],
                    }
                )
                history.push(`/deck/${deckId}`)
            }
        }
    }

    const formCancelHandler = (e) => {
        e.preventDefault()
        history.goBack()
    }

    return (
        <div className={classes.form_container}>
            {loading ? (
                <p>Loading...</p>
            ) : (
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
                        errorborder={cardFrontErrorMessage !== '' ? 1 : 0}
                        required
                    />
                    {cardFrontErrorMessage && (
                        <p className={classes.errorMessage}>
                            {cardFrontErrorMessage}
                        </p>
                    )}
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
                        errorborder={cardBackErrorMessage !== '' ? 1 : 0}
                        required
                    />
                    {cardBackErrorMessage && (
                        <p className={classes.errorMessage}>
                            {cardBackErrorMessage}
                        </p>
                    )}
                    <ImageField />
                    <div className={classes.buttonGroup}>
                        <ButtonSecondary onClick={formCancelHandler}>
                            Cancel
                        </ButtonSecondary>
                        <Button onClick={formSubmitHandler}>Save</Button>
                    </div>
                </form>
            )}
        </div>
    )
}

export default AddCardPageForm
