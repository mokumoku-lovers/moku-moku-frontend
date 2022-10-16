import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classes from './CardButtons.module.css'
import { setCurrentCardIdx } from '../../../features/study/studySlice'

const buttonConfig = {
    front: [{ name: 'Previous' }, { name: 'Show Answer' }, { name: 'Edit' }],
    back: [
        { name: 'Previous' },
        { name: 'Again' },
        { name: 'Hard' },
        { name: 'Good' },
        { name: 'Easy' },
        { name: 'Edit' },
    ],
}

const CardButtons = ({ cardItem, cardState, parentCallback, isFinal }) => {
    const { currentCardIdx } = useSelector((store) => store.study)
    const deckId = useSelector((store) => store.deck.id)
    let history = useHistory()
    const dispatch = useDispatch()

    const handleClick = (e) => {
        const name = e.currentTarget.value
        switch (name) {
            case 'Show Answer':
                parentCallback()
                break
            case 'Edit':
                history.push(`/card/${cardItem.id}`)
                break
            case 'Easy':
                if (isFinal) {
                    return history.replace(`/deck/${deckId}`)
                }
                dispatch(setCurrentCardIdx(currentCardIdx + 1))
                break
            case 'Previous':
                dispatch(setCurrentCardIdx(currentCardIdx - 1))
                break
            default:
            // code block
        }
    }

    const MakeButtons = (side) => {
        return buttonConfig[side].map((buttonItem) => (
            <div key={buttonItem.name} className={buttonItem.name}>
                <button
                    disabled={
                        buttonItem.name === 'Previous' && currentCardIdx === 0
                    }
                    className={classes.button}
                    value={buttonItem.name}
                    onClick={handleClick}
                >
                    {buttonItem.name}
                </button>
            </div>
        ))
    }

    return (
        <div className={classes.buttonGroup}>
            {cardState ? MakeButtons('back') : MakeButtons('front')}
        </div>
    )
}

export default CardButtons
