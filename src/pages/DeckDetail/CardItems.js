import React, { useEffect } from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './CardItems.module.css'
import { useHistory } from 'react-router-dom'
import { useState } from 'react'
import axios from '../../axios/axiosInstanceFunction'
import { useDispatch } from 'react-redux'
import { getDeckById } from '../../features/deckTitle/deckSlice'

const CardItems = ({ deckId }) => {
    const history = useHistory()

    const [cardList, setCardList] = useState([])
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchCard = async () => {
            const response = await dispatch(getDeckById(deckId))
            const cardIds = response.payload.cards

            const responses = await Promise.all(
                cardIds.map((cardId) =>
                    axios('http://168.138.215.26:9002/').get(`card/${cardId}`)
                )
            )

            const cards = responses.map((res) => res.data)
            setCardList(cards)
        }

        fetchCard()
    }, [deckId, dispatch])

    const onClickEditHandler = (id) => {
        history.push(`/edit-card/${id}`)
    }

    const cards = cardList.map((card, idx) => (
        <React.Fragment key={card.id}>
            <p>{idx + 1}</p>
            <div>
                <p className={classes.grid__text}>{card.front}</p>
            </div>
            <div>
                <p className={classes.grid__text}>{card.back}</p>
            </div>
            <div>
                <Button onClick={() => onClickEditHandler(card.id)}>
                    Edit
                </Button>
            </div>
        </React.Fragment>
    ))

    return (
        <div className={classes.container}>
            <p></p>
            <h1>Card Front</h1>
            <h1>Card Back</h1>
            <p></p>
            {cards}
        </div>
    )
}

export default CardItems
