import React, { useEffect, useState, useRef } from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './EditCardPageHeader.module.css'

const EditCardPageHeader = (props) => {
    const deckRef = useRef()
    const [editing, setEditing] = useState(false)
    const onClickTitleEditHandler = () => {
        setEditing(true)

        // focus to edit deck's title when user click edit icon
        // normal deckRef.current.focus() is not working so I used setTimeout
        setTimeout(function () {
            deckRef.current.focus()
        }, 0)

        deckRef.current.style.color = '#a9a9a9'
    }

    const onClickTitleSaveHandler = () => {
        setEditing(false)
        setDeckTitle(deckRef.current.innerText)
        deckRef.current.style.color = 'black'
    }
    return (
        <div className={classes.container}>
            <div>
                <div>
                    <p
                        className={classes.deck__title}
                        contentEditable={editing}
                        ref={deckRef}
                        suppressContentEditableWarning={true}
                    >
                        {deckTitle}
                    </p>
                    {editing ? (
                        <i
                            className={`far fa-save ${classes.icon} ${classes.iconSave}`}
                            onClick={onClickTitleSaveHandler}
                        ></i>
                    ) : (
                        <i
                            onClick={onClickTitleEditHandler}
                            className={`fas fa-edit ${classes.icon} ${classes.iconEdit}`}
                        ></i>
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
