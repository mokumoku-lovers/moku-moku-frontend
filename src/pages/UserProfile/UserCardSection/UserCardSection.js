import React, { useState } from 'react'
import UserProfileCard from '../../../components/UI/UserProfileCard/UserProfileCard'
import classes from './UserCardSection.module.css'
import axios from '../../../axios/axiosInstanceFunction'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'

const UserCardSection = () => {
    const [loading, setLoading] = useState(true)
    const [decks, setDecks] = useState([])
    const { user_id } = useSelector((store) => store.auth.loginData)

    useEffect(() => {
        const fetchUserDeck = async () => {
            const response = await axios('http://168.138.215.26:9002/').get(
                `/decks/${user_id}`
            )

            setDecks(response.data ? response.data : [])
            setLoading(false)
        }

        fetchUserDeck()
    }, [user_id])

    return (
        <div className={classes.container}>
            <div className={classes.card_section}>
                <h1 className={classes.title}>All Card</h1>
                {loading ? (
                    <p>Loading...</p>
                ) : decks.length > 0 ? (
                    decks.map((deck) => (
                        <Link
                            key={deck.id}
                            to={`/deck/${deck.id}`}
                            style={{ textDecoration: 'none' }}
                        >
                            <UserProfileCard
                                key={deck.id}
                                title={deck.name}
                                text={`${deck.cards.length} cards`}
                            />
                        </Link>
                    ))
                ) : (
                    <p>There is no deck yet!</p>
                )}
            </div>
        </div>
    )
}

export default UserCardSection
