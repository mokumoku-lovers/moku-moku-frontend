import React from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './CardItems.module.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'

const CardItems = ({ deckId }) => {
    const history = useHistory()
    const { cardDetails: cardList } = useSelector((store) => store.deck)

    const onClickEditHandler = (id) => {
        history.push(`/card/${id}`)
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
