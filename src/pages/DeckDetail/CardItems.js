import React from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './CardItems.module.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from '../../axios/axiosInstanceFunction'

const CardItems = ({ deckId }) => {
    const history = useHistory()
    const { cardDetails: cardList } = useSelector((store) => store.deck)
    const [selectedIds, setSelectedIds] = useState([])

    const onClickEditHandler = (id) => {
        history.push(`/card/${id}`)
    }

    const onClickDeleteHandler = async (id) => {
        console.log('deleted', id)
        try {
            const response = await axios('http://168.138.215.26:9002/').delete(
                `/card/${id}`
            )
            console.log(response)
        } catch (err) {
            console.log(err)
        }
    }

    const onSelectCheckbox = (id) => {
        console.log('the id is ', id)
    }

    const cards = cardList.map((card, idx) => (
        <div className={classes.card_row} key={card.id}>
            <div className={classes.checkbox}>
                <input
                    type="checkbox"
                    onChange={() => onSelectCheckbox(card.id)}
                />
            </div>
            <p>{idx + 1}</p>
            <div>
                <p className={classes.grid__text}>{card.front}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className={classes.grid__text}>{card.back}</p>
                <div className={classes.actionButtons}>
                    <div>
                        <Button onClick={() => onClickEditHandler(card.id)}>
                            Edit
                        </Button>
                    </div>
                    <div>
                        <Button
                            className={classes.danger}
                            onClick={() => onClickDeleteHandler(card.id)}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    ))

    return (
        <div className={classes.container}>
            <div className={classes.row}>
                <p></p>
                <p></p>
                <h1>Card Front</h1>
                <h1>Card Back</h1>
                <p></p>
            </div>
            {cards}
        </div>
    )
}

export default CardItems
