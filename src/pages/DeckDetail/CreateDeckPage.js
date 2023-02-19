import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import DeckForm from './DeckForm'
import { createDeck } from '../../features/deckTitle/deckSlice'

const CreateDeckForm = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()
    const { id } = useSelector((store) => store.user.user)

    const onSaveHandler = async (e, title) => {
        e.preventDefault()
        try {
            const result = await dispatch(
                createDeck({
                    name: title,
                    cards: [],
                    creator: id,
                })
            ).unwrap()
            history.replace(`/deck/${result.id}`)
        } catch (err) {
            console.error('error saving deck', err)
        }
    }

    const onCancelHandler = () => {
        history.replace('/profile/')
    }

    return (
        <div>
            <NavBar />
            <DeckForm
                edit={false}
                onSaveHandler={onSaveHandler}
                onCancelHandler={onCancelHandler}
            />
        </div>
    )
}

export default CreateDeckForm
