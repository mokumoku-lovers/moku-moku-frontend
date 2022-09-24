import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from '../../components/NavBar/NavBar'
import { getDeckById } from '../../features/deckTitle/deckSlice'
import CardItems from './CardItems'
import classes from './DeckDetail.module.css'
import DeckDetailPageHeader from './DeckDetailPageHeader'

const DeckDetailPage = (props) => {
    const { deckId } = useParams()
    const [loading, setLoading] = useState(true)

    const dispatch = useDispatch()

    useEffect(() => {
        const fetchDeck = async () => {
            await dispatch(getDeckById(deckId))
        }

        fetchDeck()
        setLoading(false)
    }, [deckId, dispatch])

    return (
        <>
            <NavBar />
            <div className={classes.container}>
                {loading ? (
                    'Loading'
                ) : (
                    <>
                        <DeckDetailPageHeader />
                        <CardItems deckId={deckId} />
                    </>
                )}
            </div>
        </>
    )
}

export default DeckDetailPage
