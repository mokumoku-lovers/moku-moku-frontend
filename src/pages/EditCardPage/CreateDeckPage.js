import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import DeckForm from './DeckForm'
import { onSaveTitle } from '../../features/deckTitle/deckSlice'

const CreateDeckForm = (props) => {
    const history = useHistory()
    const dispatch = useDispatch()

    const onSaveHandler = (e, title) => {
        e.preventDefault()
        console.log(e, title)
        dispatch(onSaveTitle(title))
        history.replace('/edit-card/1')
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
