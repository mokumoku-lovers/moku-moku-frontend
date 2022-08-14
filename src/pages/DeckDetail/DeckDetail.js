import React from 'react'
import { useParams } from 'react-router-dom/cjs/react-router-dom.min'
import NavBar from '../../components/NavBar/NavBar'
import CardItems from './CardItems'
import classes from './DeckDetail.module.css'
import DeckDetailPageHeader from './DeckDetailPageHeader'

const DeckDetailPage = (props) => {
    const { deckId } = useParams()

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
