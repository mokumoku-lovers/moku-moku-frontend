import React, { useState } from 'react'
import UserProfileCard from '../../../components/UI/UserProfileCard/UserProfileCard'
import classes from './UserCardSection.module.css'
import axios from '../../../axios/axiosInstanceFunction'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { getUserDeck } from '../../../features/deckTitle/deckSlice'

const UserCardSection = () => {
    const [loading, setLoading] = useState(true)
    const { decks } = useSelector((store) => store.deck)
    const dispatch = useDispatch()

    useEffect(() => {
        const fetchUserDeck = async () => {
            await dispatch(getUserDeck())
            setLoading(false)
        }

        fetchUserDeck()
    }, [dispatch])

    return (
        <div className={classes.container}>
            <h1 className={classes.title}>All Card</h1>
            <div className={classes.card_section}>
                {loading ? (
                    <p>Loading...</p>
                ) : decks?.length > 0 ? (
                    decks.map((deck) => (
                        <UserProfileCard
                            key={deck.id}
                            title={deck.name}
                            id={deck.id}
                            text={`${deck.cards.length} cards`}
                        />
                    ))
                ) : (
                    <h2>There is no deck yet!</h2>
                )}
            </div>
        </div>
    )
}

export default UserCardSection
