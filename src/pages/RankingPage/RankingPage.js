import React from 'react'
import RankingListItem from './RankingListItem'
import classes from './RankingPage.module.css'
import { Avatar } from '../../components/UI/Avatar/Avatar'
import Badge from '../../components/UI/Badge/Badge'
import Button from '../../components/UI/Button/Button'
import ButtonSecondary from '../../components/UI/Button/ButtonSecondary'
import Point from '../../components/UI/Point/Point'
import { useEffect } from 'react'
import { useState } from 'react'
import axios from '../../axios/axiosInstanceFunction'
import RankingPageLoader from '../../components/Ranking/RankingPageLoader'
import Icon from '../../icon.svg'
import NavBar from '../../components/NavBar/NavBar'

const RankingPage = () => {
    const [users, setUsers] = useState([])
    const [isLoading, setIsLoading] = useState(true)

    useEffect(() => {
        const fetchUsers = async () => {
            try {
                const response = await axios('http://168.138.215.26:9000').get(
                    '/users?by=points'
                )
                setUsers(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setTimeout(() => {
                    setIsLoading(false)
                }, 2000)
            }
        }

        fetchUsers()
    }, [])

    return (
        <div>
            <NavBar />
            <div className={classes.container}>
                <h1>Leaderboard</h1>
                {isLoading ? (
                    <RankingPageLoader />
                ) : (
                    <section className={classes.leaderboardContent}>
                        <Avatar className={classes.avatar} src={Icon} />
                        <Badge className={classes.badge} />
                        <h1 className={classes.username}>
                            {users[0].username}
                        </h1>
                        <Point
                            className={classes.point}
                            point={users[0].points}
                        />

                        <div className={classes.buttons}>
                            <ButtonSecondary>Friends</ButtonSecondary>
                            <Button>Global</Button>
                        </div>
                        {users.slice(2).map((item, idx) => (
                            <RankingListItem
                                key={item.name}
                                name={item.username}
                                img_src={
                                    'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MXwxfDB8MXxhbGx8fHx8fHx8fA&ixlib=rb-1.2.1&q=80&w=1080&utm_source=unsplash_source&utm_medium=referral&utm_campaign=api-credit'
                                }
                                point={item.points}
                                rank={idx + 2}
                            />
                        ))}
                    </section>
                )}
            </div>
        </div>
    )
}

export default RankingPage
