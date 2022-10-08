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
    const { currentCardIdx } = useSelector((store) => store.study)
    const [currentCard, setCurrentCard] = useState(cards[currentCardIdx])
    const [isFinal, setIsFinal] = useState(false)

    function flip() {
        flipCard(true)
    }

    useEffect(() => {
        flipCard(false)
        setCurrentCard(cards[currentCardIdx])

        if (currentCardIdx === cards.length - 1) {
            setIsFinal(true)
        }
    }, [currentCardIdx, cards])

    return (
        <section id="study">
            <div className={classes.container}>
                <StudyCard cardState={cardState} cardItem={currentCard} />
                <CardButtons
                    cardState={cardState}
                    parentCallback={flip}
                    cardItem={currentCard}
                    isFinal={isFinal}
                />
            </div>
        </section>
    )
}

export default Study
