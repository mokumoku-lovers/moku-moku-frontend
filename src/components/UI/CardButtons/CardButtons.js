import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import classes from './CardButtons.module.css'
import { setStudyCards } from '../../../features/study/studySlice'
import { updateUserPoint } from '../../../features/user/userSlice'
import { insertItemIntoArray } from '../../../utils/insertItemIntoArray'

const buttonConfig = {
    front: [
        // { name: 'Previous' },
        { name: 'Show Answer' },
        { name: 'Edit' },
    ],

    back: [
        // { name: 'Previous' },
        { name: 'Again' },
        { name: 'Hard' },
        // { name: 'Good' },
        { name: 'Easy' },
        { name: 'Edit' },
    ],
}

const CardButtons = ({ cardItem, cardState, parentCallback }) => {
    const { studyCards } = useSelector((store) => store.study)
    const { cards } = useSelector((store) => store.deck)
    const { id: userId, points } = useSelector((store) => store.user.user)
    const deckId = useSelector((store) => store.deck.id)
    let history = useHistory()
    const dispatch = useDispatch()

    const handleClick = async (e) => {
        const name = e.currentTarget.value
        const currentId = studyCards[0]
        const copiedCards = studyCards.slice()

        const pushCardToEndOfDeck = () => {
            copiedCards.shift()
            copiedCards.push(currentId)
            dispatch(setStudyCards(copiedCards))
        }

        switch (name) {
            case 'Show Answer':
                parentCallback()
                break
            case 'Edit':
                history.push(`/card/${cardItem.id}`)
                break
            case 'Again':
                if (copiedCards.length > 2) {
                    copiedCards.shift()
                    const temp = insertItemIntoArray(currentId, copiedCards, 2)
                    dispatch(setStudyCards(temp))
                } else {
                    pushCardToEndOfDeck(copiedCards, currentId)
                }
                break
            case 'Hard':
                pushCardToEndOfDeck(copiedCards, currentId)
                // setPoint((prev) => prev + 1)
                break
            case 'Easy':
                // setPoint((prev) => prev + 3)
                if (copiedCards.length === 1) {
                    dispatch(setStudyCards([]))
                    dispatch(
                        updateUserPoint({
                            userId,
                            points: points + cards.length,
                        })
                    )
                    return history.replace(`/deck/${deckId}`)
                }
                copiedCards.shift()
                dispatch(setStudyCards(copiedCards))
                break
            // case 'Previous':
            //     dispatch(setCurrentCardIdx(currentCardIdx - 1))
            //     break
            default:
                break
        }
    }

    const MakeButtons = (side) => {
        return buttonConfig[side].map((buttonItem) => (
            <div key={buttonItem.name} className={buttonItem.name}>
                <button
                    disabled={buttonItem.name === 'Previous'}
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
