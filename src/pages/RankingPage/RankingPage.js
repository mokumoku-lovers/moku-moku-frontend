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
                const response = await axios('https://mokumoku.zsh.jp:9000').get(
                    '/users'
                )
                setUsers(response.data)
            } catch (err) {
                console.log(err)
            } finally {
                setIsLoading(false)
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
                ) : !users.length ? (
                    <h2>There is no users yet.</h2>
                ) : (
                    <section className={classes.leaderboardContent}>
                        <Avatar className={classes.avatar} src={Icon} />
                        <Badge className={classes.badge} />
                        <h1 className={classes.username}>
                            {users[0].display_name || users[0].username}
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
                                name={item.display_name || item.username}
                                img_src={
                                    item.profile_picture || '/images/user.png'
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
