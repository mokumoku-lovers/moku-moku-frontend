import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from '../../components/NavBar/NavBar'
import { getDeckById } from '../../features/deckTitle/deckSlice'
import CardItems from './CardItems'
import classes from './DeckDetail.module.css'
import DeckDetailPageHeader from './DeckDetailPageHeader'

const DeckDetailPage = (props) => {
    const { deckId } = useParams()

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDeck = async () => {
            await dispatch(getDeckById(deckId))
        }

        fetchDeck()
    }, [deckId, dispatch])

    return (
        <>
            <NavBar />
            <div className={classes.container}>
                <DeckDetailPageHeader />
                <CardItems deckId={deckId} />
            </div>
        </>
    )
}

export default DeckDetailPage
