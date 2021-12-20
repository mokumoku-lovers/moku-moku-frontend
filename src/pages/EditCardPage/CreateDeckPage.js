import React from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'
import NavBar from '../../components/NavBar/NavBar'
import DeckForm from './DeckForm'
import { onSaveTitle } from '../../features/deckTitle/deckSlice'

const CreateDeckForm = (props) => {
    return (
        <div>
            <NavBar />
            <DeckForm />
        </div>
    )
}

export default CreateDeckForm
