import React, { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './DeckDetailPageHeader.module.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DeckForm from './DeckForm'
import { useDispatch } from 'react-redux'
import { updateDeckById } from '../../features/deckTitle/deckSlice'
import { useParams } from 'react-router-dom'
import { setStudyCards } from '../../features/study/studySlice'
import { shuffle } from '../../utils/shuffleArray'

const DeckDetailPageHeader = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const { deckId } = useParams()

    const [showEditForm, setShowEditForm] = useState()
    const title = useSelector((state) => state.deck.title)
    const cards = useSelector((state) => state.deck.cards)

    const onClickTitleEditHandler = () => {
        setShowEditForm(true)
    }

    const clickAddCardButton = () => {
        history.push(`/deck/${deckId}/add-card/`)
    }

    const clickStudyButton = () => {
        const shuffledCards = shuffle(cards.slice())
        dispatch(setStudyCards(shuffledCards))
        history.push(`/study/${deckId}`)
    }

    const onCancelHandler = () => {
        setShowEditForm(false)
    }

    const onSaveHandler = (e, title) => {
        e.preventDefault()
        const formData = { name: title }
        dispatch(updateDeckById({ deckId, formData }))
        setShowEditForm(false)
    }

    return (
        <div className={classes.container}>
            <div>
                <div>
                    <p className={classes.deck__title}>{title}</p>

                    <i
                        onClick={onClickTitleEditHandler}
                        className={`fas fa-edit ${classes.icon} ${classes.iconEdit}`}
                    ></i>

                    {showEditForm && (
                        <DeckForm edit={true} onCancelHandler={onCancelHandler} onSaveHandler={onSaveHandler} />
                    )}
                </div>
                <p className={classes.card__count}>{cards.length} card</p>
            </div>
            <div className={classes.card__buttons}>
                <Button onClick={clickAddCardButton}>Add Card</Button>
                <Button disabled={!cards.length} onClick={clickStudyButton}>
                    Study
                </Button>
            </div>
        </div>
    )
}

export default DeckDetailPageHeader
