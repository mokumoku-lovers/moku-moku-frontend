import React from 'react'
import Button from '../../components/UI/Button/Button'
import classes from './CardItems.module.css'
import { useHistory } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useState } from 'react'
import axios from '../../axios/axiosInstanceFunction'
import TrashIcon from '../../assets/images/trash.svg'
import EditIcon from '../../assets/images/edit.svg'
import { useDispatch } from 'react-redux'
import { getDeckById } from '../../features/deckTitle/deckSlice'

const CardItems = ({ deckId }) => {
    const history = useHistory()
    const { cardDetails: cardList } = useSelector((store) => store.deck)
    const [selectedIds, setSelectedIds] = useState([])
    const dispatch = useDispatch()

    const onClickEditHandler = (id) => {
        history.push(`/card/${id}`)
    }

    const onClickDeleteHandler = async (id) => {
        try {
            const response = await axios('http://168.138.215.26:9002/').delete(`/card/${id}`)
            if (response.status === 200) {
                dispatch(getDeckById(deckId))
            }
        } catch (err) {
            console.log(err)
        }
    }

    const onSelectCheckbox = (e, id) => {
        if (e.target.checked) {
            setSelectedIds([...selectedIds, id])
        } else {
            setSelectedIds(selectedIds.filter((current_id) => current_id !== id))
        }
        console.log(selectedIds)
    }

    const onClickDeleteSelected = () => {
        alert(`Deleting ${selectedIds}`)
        setSelectedIds([])
    }

    const cards = cardList.map((card, idx) => (
        <div className={classes.card_row} key={card.id}>
            <div className={classes.checkbox}>
                <input type="checkbox" onChange={(e) => onSelectCheckbox(e, card.id)} />
            </div>
            <p>{idx + 1}</p>
            <div>
                <p className={classes.grid__text}>{card.front}</p>
            </div>
            <div style={{ display: 'flex', alignItems: 'center' }}>
                <p className={classes.grid__text}>{card.back}</p>
                <div className={classes.actionButtons}>
                    <div onClick={() => onClickEditHandler(card.id)}>
                        <img src={EditIcon} alt="edit" />
                    </div>
                    <div onClick={() => onClickDeleteHandler(card.id)}>
                        <img src={TrashIcon} alt="delete" />
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
                <div style={{ display: 'flex' }}>
                    <h1>Card Back</h1>
                    <div style={{ marginLeft: 'auto' }}>
                        {selectedIds.length ? (
                            <Button className={classes.danger} onClick={() => onClickDeleteSelected()}>
                                Delete
                            </Button>
                        ) : (
                            ''
                        )}
                    </div>
                </div>
            </div>
            {cards}
        </div>
    )
}

export default CardItems
