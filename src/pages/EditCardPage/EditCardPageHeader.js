<<<<<<< HEAD
import React from 'react'
import { useState, useRef } from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './EditCardPageHeader.module.css'
import EditIcon from './edit_icon.png'
import SaveIcon from './save_icon.png'
import { useHistory } from 'react-router-dom'

const EditCardPageHeader = () => {
    const history = useHistory()
    const deckRef = useRef()

    const [editing, setEditing] = useState(false)
    const [deckTitle, setDeckTitle] = useState('Deck title')

    const onClickTitleEditHandler = () => {
        setEditing(true)
        deckRef.current.readOnly = false
        deckRef.current.focus()
    }

    const onClickTitleSaveHandler = () => {
        setEditing(false)
        deckRef.current.readOnly = true
        deckRef.current.style.color = 'black'
    }

    const onChangeTitleHandler = (e) => {
        setDeckTitle(e.target.value)
=======
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
>>>>>>> d97b87903ccf326ab712d5cffc70190ef3e232da
    }

    const clickAddCardButton = () => {
        history.push('/add-card/')
    }

    const clickStudyButton = () => {
        history.push('/study/')
    }

<<<<<<< HEAD
=======
    const onCancelHandler = () => {
        setShowEditForm(false)
    }

    const onSaveHandler = (e, title) => {
        e.preventDefault()
        setShowEditForm(false)
        dispatch(onSaveTitle(title))
        console.log('Updated')
    }

>>>>>>> d97b87903ccf326ab712d5cffc70190ef3e232da
    return (
        <div className={classes.container}>
            <div>
                <div>
<<<<<<< HEAD
                    <input
                        type="text"
                        value={deckTitle}
                        className={classes.deck__title}
                        onChange={onChangeTitleHandler}
                        ref={deckRef}
                        readOnly={true}
                    />
                    <img
                        className={classes.deck__title__edit}
                        src={editing ? SaveIcon : EditIcon}
                        alt="Icon"
                        onClick={
                            editing
                                ? onClickTitleSaveHandler
                                : onClickTitleEditHandler
                        }
                    />
                </div>
                <p class={classes.card__count}>10,000 cards</p>
=======
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
>>>>>>> d97b87903ccf326ab712d5cffc70190ef3e232da
            </div>
            <div className={classes.card__buttons}>
                <Button onClick={clickAddCardButton}>Add Card</Button>
                <Button onClick={clickStudyButton}>Study</Button>
            </div>
        </div>
    )
}

export default EditCardPageHeader
