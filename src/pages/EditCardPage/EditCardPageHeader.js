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
    }

    const clickAddCardButton = () => {
        history.push('/add-card/')
    }

    const clickStudyButton = () => {
        history.push('/study/')
    }

    return (
        <div className={classes.container}>
            <div>
                <div>
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
            </div>
            <div className={classes.card__buttons}>
                <Button onClick={clickAddCardButton}>Add Card</Button>
                <Button onClick={clickStudyButton}>Study</Button>
            </div>
        </div>
    )
}

export default EditCardPageHeader
