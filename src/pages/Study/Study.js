import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import StudyCard from '../../components/StudyCard/StudyCard'
import CardButtons from '../../components/UI/CardButtons/CardButtons'
import classes from './Study.module.css'

const Study = () => {
    //  Card front side: false
    //  Card back side: true
    const [cardState, flipCard] = useState(false)
    const { cardDetails: cards } = useSelector((store) => store.deck)
    const { studyCards } = useSelector((store) => store.study)
    const [currentCard, setCurrentCard] = useState({})

    function flip() {
        flipCard(true)
    }

    useEffect(() => {
        flipCard(false)
        setCurrentCard(cards.find((card) => card.id === studyCards[0]))
    }, [cards, studyCards])

    return (
        <section id="study">
            <div className={classes.container}>
                {currentCard ? (
                    <>
                        <StudyCard
                            cardState={cardState}
                            cardItem={currentCard}
                        />
                        <CardButtons
                            cardState={cardState}
                            parentCallback={flip}
                            cardItem={currentCard}
                        />
                    </>
                ) : (
                    <p>There is no more cards.</p>
                )}
            </div>
        </section>
    )
}

export default Study
