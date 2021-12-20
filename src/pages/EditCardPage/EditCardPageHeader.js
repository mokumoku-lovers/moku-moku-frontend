import React, { useState } from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './EditCardPageHeader.module.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import DeckForm from './DeckForm'
import { useDispatch } from 'react-redux'
import { onSaveTitle } from '../../features/deckTitle/deckSlice'

const EditCardPageHeader = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const [showEditForm, setShowEditForm] = useState()
    const title = useSelector((state) => state.deck.title)

    const onClickTitleEditHandler = () => {
        setShowEditForm(true)
    }

    const clickAddCardButton = () => {
        history.push('/add-card/')
    }

    const clickStudyButton = () => {
        history.push('/study/')
    }

    const onCancelHandler = () => {
        setShowEditForm(false)
    }

    const onSaveHandler = (e, title) => {
        e.preventDefault()
        setShowEditForm(false)
        dispatch(onSaveTitle(title))
        console.log('Updated')
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
                        <DeckForm
                            edit={true}
                            onCancelHandler={onCancelHandler}
                            onSaveHandler={onSaveHandler}
                        />
                    )}
                </div>
                <p className={classes.card__count}>0 card</p>
            </div>
            <div className={classes.card__buttons}>
                <Button onClick={clickAddCardButton}>Add Card</Button>
                <Button onClick={clickStudyButton}>Study</Button>
            </div>
        </div>
    )
}

export default EditCardPageHeader
